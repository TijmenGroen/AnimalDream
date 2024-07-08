import "../css/cart.css";
import CartItem from "../components/cartItem";
import { useState, useEffect } from "react";
import { ProductService } from "../services/productService";

function CartPage(): JSX.Element { 
    // eslint-disable-next-line @typescript-eslint/typedef
    const [product, setProduct] = useState<any>({});
    // eslint-disable-next-line @typescript-eslint/typedef
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
      const items: number[] = [1, 2, 3]
    const getProductData: any = async (): Promise<void> => {
      try{
        const productService: ProductService = new ProductService();
        setProduct(await productService.getProductsDataById(items));
      }
      catch(err){
        // do nothing
      }
      finally{
        setLoading(false)
      }
    }

    getProductData();
  }, []);
  
  if(loading) {
    return <div>Loading...</div>;
  }

    return (
      <div className="cartPage">
        <div className="cartItemsBox">
            <CartItem name={product[0].productName} price={product[0].productPrice} />
            <hr />
            <CartItem name={product[1].productName} price={product[0].productPrice} />
            <hr />
            <CartItem name={product[2].productName} price={product[2].productPrice} />
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
