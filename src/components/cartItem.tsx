import React from "react";
import "../css/cart.css";
import Placeholder from "/assets/img/placeholder.svg";
import { Heart, Trash2 } from "lucide-react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cartItem">
        <div style={{display: "flex", width: "60%"}}>
            <div className="cartItemImg">
              <img src={Placeholder} alt="productBanner" />
            </div>
            <div className="cartItemBody">
              <div className="cartItemHead">Hondenlijn - 8m</div>
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
        <div className="cartItemPrice">
            € 555,55
        </div>
      </div>
    );
  }
}

export default CartItem;
