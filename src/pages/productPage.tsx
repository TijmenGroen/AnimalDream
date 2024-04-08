import { Heart } from "lucide-react";
import "../css/product.css";
import Placeholder from "/assets/img/placeholder.svg";

function ProductPage() {
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
      <div className="productActionButtons">
        <button style={{ width: "80%" }}>Aan winkelwagen toevoegen</button>
        <button className="favoriteButton">
          <Heart />
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
