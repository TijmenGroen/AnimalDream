import { Request, Response } from "express";
import { getConnection, queryDatabase } from "../databaseConfig";
import { PoolConnection, ResultSetHeader } from "mysql2/promise";
import { Product } from "@shared/types/product";

export class ProductController {
    public async getProducts(_req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const result: ResultSetHeader = await queryDatabase(connection,
                `
               SELECT *
               FROM product
                `
            )
            connection.release();
            res.status(200).json(this.pushProductsToArray(result));
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }
    private pushProductsToArray(query: any): Product[] {
        const ProductsArray: Product[] = []
        for(let i: number = 0; i < query.length; i++){
            ProductsArray.push({
                id: query[i].productId,
                name: query[i].productName,
                description: query[i].productDescription,
                price: query[i].productPrice
            })
        }
        return ProductsArray
    }

    public async getProductDataByIds(req: Request, res: Response): Promise<void> {
        const connection: PoolConnection = await getConnection()
        try{
            const result: Product[] = await queryDatabase(connection,
                `
               SELECT productName, productDescription, productPrice
               FROM product
               WHERE productId IN ?
                `,
                [req.body.ids]
            )
            connection.release();
            res.status(200).json(result);
        }
        catch(err){
            res.sendStatus(400);
            connection.release()
            throw err;
        }
    }
}