import React, { useEffect, useState } from "react";
import "../css/product.css";
import { ProductService } from "../services/productService";
import ProductContainer from "../components/product";
import { Product } from "@shared/types/product";

const ProductPage: React.FC = (): JSX.Element => {

  // eslint-disable-next-line @typescript-eslint/typedef
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/typedef
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/typedef
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts: any = async (): Promise<void> => {
      try {
        const productService: ProductService = new ProductService();
        const products: Product[] = await productService.getProducts();
        setProductsArray(products);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="productPage">
      {productsArray.map((product: Product) => (
        <ProductContainer key={product.id} name={product.name} description={product.description} price={product.price}/>
      ))}
    </div>
  );
};

export default ProductPage;
