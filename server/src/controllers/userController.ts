import { Request, Response } from "express";
import { getConnection, queryDatabase } from "../databaseConfig";
import { PoolConnection, ResultSetHeader } from "mysql2/promise";

export class UserController {
    public async register(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const result: ResultSetHeader = await queryDatabase(connection,
                `
                INSERT INTO user
                VALUES (DEFAULT, ?)
                `,
                [req.body.firstname, req.body.lastname, req.body.email, req.body.password]
            )
            res.status(200).send("blaap");
            console.log(result)
            connection.release()
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }
}