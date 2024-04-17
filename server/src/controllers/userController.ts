import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getConnection, queryDatabase } from "../databaseConfig";
import { Connection, PoolConnection, ResultSetHeader } from "mysql2/promise";

export class UserController {
    public async register(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const data: ResultSetHeader = await queryDatabase(connection,
                `
                INSERT INTO user
                VALUES (DEFAULT, ?, ?, ?, ?)
                `,
                [req.body.firstname, req.body.lastname, req.body.email, req.body.password]
            )
            res.status(200).send("blaap");
        }
        catch(err){
            res.sendStatus(400);
            throw err;
        }
        finally{
            connection.end();
        }
    }
}