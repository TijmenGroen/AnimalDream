import Text from "/assets/img/animaldreamtext.png";
import Logo from "/assets/img/animaldream.png";
import ChevronDown from "/assets/img/chevron-down.svg";
import "../css/navigation.css"
import { Compass, LibraryBig, LogIn, ShoppingCart, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserService } from "../services/userService";

function Navigation(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/typedef
  const [navBarSmallToggled, setNavBarSmallToggled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/typedef
  const [navBarSmallOffset, setNavBarSmallOffset] = useState("-22rem");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [navBarSmallButtonRotation, setNavBarSmallButtonRotation] = useState("0deg");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [loggedIn, setLoggedIn] = useState(false);

  const location: any = useLocation();

  useEffect(() => {
    async function checkIfLoggedIn(): Promise<void> {
      const userService: UserService = new UserService();
      setLoggedIn(userService.checkIfLoggedIn());
    }
    checkIfLoggedIn()
  }, [location])

  function toggleNavbarSmall(): void {
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
          {!loggedIn && <Link to="/login"><div className="navbar-icon">Log In<LogIn size={18}/></div></Link>}
          {loggedIn && <Link to="/account"><div className="navbar-icon">Account<UserRound  size={18}/></div></Link>}
        </div>
      </div>
      <div className="navbar-small-spacing"></div>
      <div className="navbar-small" style={{transform: `translateY(${navBarSmallOffset})`}}>
        <div className="navbar-small-buttons">
          <Link to="/products" onClick={toggleNavbarSmall}><div className="navbar-icon">Products<Compass size={18}/></div></Link>
          <Link to="/cart" onClick={toggleNavbarSmall}><div className="navbar-icon">Cart<ShoppingCart size={18}/></div></Link>
          <Link to="/" onClick={toggleNavbarSmall}><div className="navbar-icon">About<LibraryBig size={18}/></div></Link>
          {!loggedIn && <Link to="/login" onClick={toggleNavbarSmall}><div className="navbar-icon">Log In<LogIn size={18}/></div></Link>}
          {loggedIn && <Link to="/account" onClick={toggleNavbarSmall}><div className="navbar-icon">Account<UserRound size={18}/></div></Link>}
        </div>
        <div className="navbar-small-logo">
            <Link to="/" onClick={toggleNavbarSmall}>
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
