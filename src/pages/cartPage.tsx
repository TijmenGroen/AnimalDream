import "../css/cart.css";
import CartItem from "../components/cartItem";

function CartPage() {
    return (
      <div className="cartPage">
        <div className="cartItemsBox">
            <CartItem />
            <hr />
            <CartItem />
            <hr />
            <CartItem />
            <hr />
            <CartItem />
            <hr />
            <CartItem />
            <hr />
        </div>
      </div>
    );
  }

export default CartPage;
