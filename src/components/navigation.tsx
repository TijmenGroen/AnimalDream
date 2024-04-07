import Logo from "/assets/img/animaldreamlogo.png";
import "../css/navigation.css"

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a href=""><img src={Logo} alt="logo" style={{width: "3rem", float: "left", transform: "translate(0, -3px)", marginRight: "1rem"}}/>Animal Dream</a>
      </div>
      <div className="navbar-center">
        <a href="">Products</a>
        <a href="">Cart</a>
        <a href="">About</a>
      </div>
      <div className="navbar-end">
        <a href="">Log In</a>
      </div>
    </div>
  );
}

export default Navigation;
