import { Request, Response } from "express";
import { getConnection, queryDatabase } from "../databaseConfig";
import { PoolConnection, ResultSetHeader } from "mysql2/promise";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { userData } from "@shared/types/userData";

const maxCookieAge: number = 60 * 60 * 1000 * 24
const maxJWTAge: string = "1d"
const saltRounds: number = 10

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
            
            const hashedPassword: string = bcrypt.hashSync(req.body.password, saltRounds)
            const result2: ResultSetHeader = await queryDatabase(connection,
                `
                INSERT INTO user
                VALUES (DEFAULT, ?)
                `,
                [req.body.firstname, req.body.lastname, req.body.email, hashedPassword, null, null]
            )
            const token: string = jwt.sign({ id: result2.insertId }, (process.env.JWT_SECRET_KEY as string), { expiresIn: maxJWTAge})
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
            const result: {userId: number, password: string}[] = await queryDatabase(connection,
                `
                SELECT userId, password
                FROM user
                WHERE email = ?
                `,
                [req.body.email]
            )
            if(result.length === 1){
                const passwordCorrect: boolean = bcrypt.compareSync(req.body.password, result[0].password)
                if(!passwordCorrect) {
                    res.sendStatus(401) 
                    return
                }
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
                SELECT DISTINCT u.firstname, u.lastname, u.email, u.phoneNumber, u.title, 
                JSON_ARRAYAGG(a.city) as city, 
                JSON_ARRAYAGG(a.street) as street, 
                JSON_ARRAYAGG(a.houseNumber) as houseNumber, 
                JSON_ARRAYAGG(a.postalCode) as postalCode
                FROM user u
                LEFT JOIN user_address ua ON u.userId = ua.userId
                LEFT JOIN address a ON ua.addressId = a.addressId
                WHERE u.userId = ?
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

    // Uses auth middleware
    public async addAddressToUser(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        const jwtToken: string = req.headers["authorization"]!;
        const token: any = jwt.verify(jwtToken, (process.env.JWT_SECRET_KEY as string))
        try{
            const result2: any = await queryDatabase(connection,
                `
                SELECT addressId
                FROM address
                WHERE postalCode = ?
                AND houseNumber = ?
                `,
                [req.body.postalCode], [req.body.houseNumber]
            )
            if(result2.length < 1) {
                const result: ResultSetHeader = await queryDatabase(connection,
                    `
                    INSERT INTO address
                    VALUES (DEFAULT, ?)
                    `,
                    [req.body.city, req.body.street, req.body.houseNumber, req.body.postalCode]
                )
                await queryDatabase(connection,
                    `
                    INSERT INTO user_address
                    VALUES (?)
                    `,
                    [token.id, result.insertId]
                )
            }
            else {
                await queryDatabase(connection,
                    `
                    INSERT INTO user_address
                    VALUES (?)
                    `,
                    [token.id, result2[0].addressId]
                )
            }
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }

    // Uses auth middleware
    public async logOut(_req: Request, res: Response): Promise<void> {
        try{
            res.clearCookie("jwt").sendStatus(200)
        }
        catch(err){
            res.sendStatus(400);
            throw err;
        }
    }
}