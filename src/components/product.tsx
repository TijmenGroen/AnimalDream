import React from "react";
import { ShoppingCart } from "lucide-react";
import "../css/product.css";
import Placeholder from "/assets/img/placeholder.svg";

class Product extends React.Component {
  render() {
    return (
      <div className="productContainer">
        <div className="productBanner">
          <img src={Placeholder} alt="productBanner" />
        </div>
        <div className="productTitle">
          Hondenlijn - 8m
          <hr />
        </div>
        <div className="productDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          excepturi recusandae sed deserunt repudiandae impedit voluptates,
          nostrum similique quia alias quis voluptate, commodi consequatur!
        </div>
        <div className="productActions">
          <p className="productPrice">€555,55,-</p>
          <button style={{ width: "55%"}}><ShoppingCart /><p style={{paddingTop: "4px", marginLeft: "4px"}}>Bestel</p></button>
        </div>
      </div>
    );
  }
}

export default Product;
