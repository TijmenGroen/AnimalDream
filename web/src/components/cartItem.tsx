import "../css/cart.css";
import Placeholder from "/assets/img/placeholder.svg";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function CartItem(props: {name: string, price: number}): JSX.Element {

  return (
    <div className="cartItem">
      <div style={{ display: "flex" }}>
        <div className="cartItemImg">
          <img src={Placeholder} alt="productBanner" />
        </div>
        <div className="cartItemBody">
          <Link to="/products">
            <div className="cartItemHead">{props.name}</div>
          </Link>
          <div className="cartItemAmount">
            <select className="cartItemAmountSelect" name="amount" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="more">Meer</option>
            </select>
          </div>
          <div className="cartItemActionButtons">
            <button>
              <Trash2 stroke="#121675" size={28} />
            </button>
            <button>
              <Heart stroke="#121675" size={28} />
            </button>
          </div>
        </div>
      </div>
      <div className="cartItemPrice">€ {props.price}</div>
    </div>
  );
}

export default CartItem;
