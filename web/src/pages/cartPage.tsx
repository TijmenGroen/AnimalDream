import "../css/cart.css";
import CartItem from "../components/cartItem";

function CartPage(): JSX.Element {
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
        <div className="cartTotalBox">
            <p className="cartTotalHead">
                Totaalprijs
            </p>
            <div className="cartTotalBody">
                <div className="cartTotalContainer">
                    <p className="cartTotalSubTotal">
                        Subtotaal <br />
                        Verzending
                    </p>
                    <p className="cartTotalSubTotal">
                        € 555,55 <br />
                        € 3,95
                    </p>
                </div>
                <hr />
                <div className="cartTotalContainer">
                    <p className="CartTotalSubTotal">
                        Totaal
                    </p>
                    <p className="CartTotalSubTotal">
                        € 599,50
                    </p>
                </div>
                <button>
                    Verder met bestellen
                </button>
            </div>
        </div>
      </div>
    );
  }

export default CartPage;
