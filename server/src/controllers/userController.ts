import { Request, Response } from "express";
import { getConnection, queryDatabase } from "../databaseConfig";
import { PoolConnection, ResultSetHeader } from "mysql2/promise";
import jwt from "jsonwebtoken"
import { userData, userId } from "@shared/types/userData";

const maxCookieAge: number = 24 * 60 * 60 * 1000

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
            const result2: ResultSetHeader = await queryDatabase(connection,
                `
                INSERT INTO user
                VALUES (DEFAULT, ?)
                `,
                [req.body.firstname, req.body.lastname, req.body.email, req.body.password]
            )
            const token: string = jwt.sign({ id: result2.insertId }, (process.env.JWT_SECRET_KEY as string), { expiresIn: "1h"})
            res.cookie("jwt", token, {maxAge: maxCookieAge}).sendStatus(200);
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
            const result: userId[] = await queryDatabase(connection,
                `
                SELECT userId
                FROM user
                WHERE email = ?
                AND password = ?
                `,
                [req.body.email], [req.body.password]
            )
            if(result.length === 1){
                const token: string = jwt.sign({ id: result[0].userId }, (process.env.JWT_SECRET_KEY as string), { expiresIn: "1h"})
                res.cookie("jwt", token, {maxAge: maxCookieAge}).sendStatus(200)
            }
            else if(result.length < 1) res.sendStatus(204)
            else res.sendStatus(500)
            connection.release()
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }

    // Uses auth middleware
    public async getUserData(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        const jwtToken: string = req.headers["authorization"]!;
        const token: any = jwt.verify(jwtToken, (process.env.JWT_SECRET_KEY as string))
        try{
            const result: userData[] = await queryDatabase(connection,
                `
                SELECT firstname, lastname, email
                FROM user
                WHERE userId = ?
                `,
                [token.id]
            )
            res.status(200).json(result[0])
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }
}