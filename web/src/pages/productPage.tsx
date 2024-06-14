import { useEffect } from "react";
import Product from "../components/product";
import "../css/product.css";
import { ProductService } from "../services/productService";

function ProductPage(): JSX.Element {
  useEffect(() => {
    const productService: ProductService = new ProductService();
    productService.getProducts();
  })
  
  return (
    <div className="productPage">
      <Product /><Product /><Product /><Product /><Product /><Product />
    </div>
  );
}

export default ProductPage;
