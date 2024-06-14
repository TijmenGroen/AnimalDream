import Product from "../components/product";

const headers: { "Content-Type": string } = {
    "Content-Type": "application/json",
};

export class ProductService {
    public async getProducts(): Promise<Product[]> {
        const response: Response = await fetch(`${import.meta.env.VITE_API_URL}products/getAll`, {
            method: "get",
            headers: headers
        });

        if(!response.ok){
            console.error(response)
            return []
        }
        return (await response.json()) as Product[];
    }
}