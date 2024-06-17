import { ShoppingCart } from "lucide-react";
import "../css/product.css";
import Placeholder from "/assets/img/placeholder.svg";

function ProductContainer(props: {name?: string, description?: string, price?: number}): JSX.Element {
  return (
      <div className="productContainer">
        <div className="productBanner">
          <img src={Placeholder} alt="productBanner" />
        </div>
        <div className="productTitle">
          {props.name}
          <hr />
        </div>
        <div className="productDescription">
          {props.description}
        </div>
        <div className="productActions">
          <p className="productPrice">€ {props.price}</p>
          <button style={{ width: "55%"}}><ShoppingCart /><p style={{paddingTop: "4px", marginLeft: "4px"}}>Bestel</p></button>
        </div>
      </div>
    );
}

export default ProductContainer;
