import { Request, Response } from "express";
import { getConnection, queryDatabase } from "../databaseConfig";
import { PoolConnection, ResultSetHeader } from "mysql2/promise";

export class ProductController {
    public async getProducts(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const result: ResultSetHeader = await queryDatabase(connection,
                `
               SELECT *
               FROM product
                `,
                []
            )
            console.log(result);
            res.status(200);
            connection.release()
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }
}