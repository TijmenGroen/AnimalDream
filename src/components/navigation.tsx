import Text from "/assets/img/animaldreamtext.png";
import Logo from "/assets/img/animaldream.png";
import "../css/navigation.css"
import { Compass, LibraryBig, LogIn, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link to="/">
          <img src={Logo} alt="logo" style={{height: "5rem", float: "left", marginRight: "1rem", transform: "translate(8px, 12px)"}}/>
          <img src={Text} alt="logo" style={{height: "2rem", float: "left", marginRight: "1rem"}}/>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/products"><div className="navbar-icon">Products<Compass size={18}/></div></Link>
        <Link to="/cart"><div className="navbar-icon">Cart<ShoppingCart size={18}/></div></Link>
        <Link to="/"><div className="navbar-icon">About<LibraryBig size={18}/></div></Link>
      </div>
      <div className="navbar-end">
        <Link to="/"><div className="navbar-icon">Log In<LogIn size={18}/></div></Link>
      </div>
    </div>
  );
}

export default Navigation;
