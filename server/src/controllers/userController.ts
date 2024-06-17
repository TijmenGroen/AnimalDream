import { Request, Response } from "express";
import { getConnection, queryDatabase } from "../databaseConfig";
import { PoolConnection } from "mysql2/promise";

export class UserController {
    public async register(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const result: any = await queryDatabase(connection,
                `
                SELECT COUNT(*) as total
                FROM user
                WHERE email = ?
                `,
                [req.body.email]
            )
            if(result[0].total > 0) {
                res.sendStatus(204);
                connection.release()
                return
            }
            await queryDatabase(connection,
                `
                INSERT INTO user
                VALUES (DEFAULT, ?)
                `,
                [req.body.firstname, req.body.lastname, req.body.email, req.body.password]
            )
            res.sendStatus(200);
            connection.release()
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }

    public async logIn(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const result: any = await queryDatabase(connection,
                `
                SELECT firstname, lastname, email
                FROM user
                WHERE email = ?
                AND password = ?
                `,
                [req.body.email], [req.body.password]
            )
            if(result.length === 1)res.status(200).json(result[0])
            else if(result.length < 1)res.sendStatus(204)
            else res.sendStatus(500)
            connection.release()
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }
}