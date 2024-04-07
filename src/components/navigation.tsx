import Logo from "/assets/img/animaldreamlogo.png";
import "../css/navigation.css"
import { Compass, LibraryBig, LogIn, ShoppingCart } from "lucide-react";

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a href="">
          <img src={Logo} alt="logo" style={{height: "5rem", float: "left", marginRight: "1rem"}}/>
          <span>Animal Dream</span>
        </a>
      </div>
      <div className="navbar-center">
        <a href=""><div className="navbar-icon">Products<Compass size={18}/></div></a>
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
