import Text from "/assets/img/animaldreamtext.png";
import Logo from "/assets/img/animaldream.png";
import "../css/navigation.css"
import { Compass, LibraryBig, LogIn, ShoppingCart } from "lucide-react";

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a href="/">
          <img src={Logo} alt="logo" style={{height: "5rem", float: "left", marginRight: "1rem", transform: "translate(8px, 12px)"}}/>
          <img src={Text} alt="logo" style={{height: "2rem", float: "left", marginRight: "1rem"}}/>
        </a>
      </div>
      <div className="navbar-center">
        <a href="/products"><div className="navbar-icon">Products<Compass size={18}/></div></a>
        <a href=""><div className="navbar-icon">Cart<ShoppingCart size={18}/></div></a>
        <a href=""><div className="navbar-icon">About<LibraryBig size={18}/></div></a>
      </div>
      <div className="navbar-end">
        <a href=""><div className="navbar-icon">Log In<LogIn size={18}/></div></a>
      </div>
    </div>
  );
}

export default Navigation;
