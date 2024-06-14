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
                `,
                []
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
        ProductsArray.forEach(() => {
            ProductsArray.push({
                name: query.name,
                description: query.description,
                price: query.price
            })
        });
        return ProductsArray
    }
}