import Text from "/assets/img/animaldreamtext.png";
import Logo from "/assets/img/animaldream.png";
import ChevronDown from "/assets/img/chevron-down.svg";
import "../css/navigation.css"
import { Compass, LibraryBig, LogIn, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [navBarSmallToggled, setNavBarSmallToggled] = useState(false);
  const [navBarSmallOffset, setNavBarSmallOffset] = useState("-22rem");
  const [navBarSmallButtonRotation, setNavBarSmallButtonRotation] = useState("0deg");

  function toggleNavbarSmall() {
    if(navBarSmallToggled === false){
      setNavBarSmallToggled(true);
      setNavBarSmallOffset("-120px");
      setNavBarSmallButtonRotation("180deg")
    }
    else {
      setNavBarSmallToggled(false);
      setNavBarSmallOffset("-22rem");
      setNavBarSmallButtonRotation("0deg")
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/">
            <img src={Logo} alt="logo" style={{height: "5rem", float: "left", marginRight: "1rem", transform: "translate(8px, 12px)"}}/>
            <div className="logo-text"><img src={Text} alt="logo-text" style={{height: "2rem", float: "left", marginRight: "1rem"}}/></div>
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/products"><div className="navbar-icon">Products<Compass size={18}/></div></Link>
          <Link to="/cart"><div className="navbar-icon">Cart<ShoppingCart size={18}/></div></Link>
          <Link to="/"><div className="navbar-icon">About<LibraryBig size={18}/></div></Link>
        </div>
        <div className="navbar-end">
          <Link to="/login"><div className="navbar-icon">Log In<LogIn size={18}/></div></Link>
        </div>
      </div>
      <div className="navbar-small-spacing"></div>
      <div className="navbar-small" style={{transform: `translateY(${navBarSmallOffset})`}}>
        <div className="navbar-small-buttons">
          <Link to="/products" onClick={toggleNavbarSmall}><div className="navbar-icon">Products<Compass size={18}/></div></Link>
          <Link to="/cart" onClick={toggleNavbarSmall}><div className="navbar-icon">Cart<ShoppingCart size={18}/></div></Link>
          <Link to="/" onClick={toggleNavbarSmall}><div className="navbar-icon">About<LibraryBig size={18}/></div></Link>
          <Link to="/login" onClick={toggleNavbarSmall}><div className="navbar-icon">Log In<LogIn size={18}/></div></Link>
        </div>
        <div className="navbar-small-logo">
            <Link to="/">
              <img src={Logo} alt="logo" style={{height: "5rem", float: "left", marginRight: "1rem", transform: "translate(8px, 12px)"}}/>
              <img src={Text} alt="logo-text" style={{height: "2rem", float: "left", marginRight: "1rem"}}/>
            </Link>
          </div>
          <div className="navbar-small-toggle">
            <button onClick={toggleNavbarSmall}>
              <img src={ChevronDown} alt="chevronDown" style={{transition: "all 500ms ease-in-out", width: "2.3rem", transform: `rotate(${navBarSmallButtonRotation})`}}/>
            </button>
          </div>
      </div>
    </>
  );
}

export default Navigation;
