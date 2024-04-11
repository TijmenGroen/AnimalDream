import { Link } from "react-router-dom";
import "../css/logInRegister.css";

function LogInBox() {
  return (
    <div className="logInRegisterBox">
        <div className="logInRegisterBody">
            <div className="logInRegisterHead">
                Welkom terug
            </div>
            <div className="logInRegisterContent">
                <div className="logInRegisterCredentialField">
                    <input type="text" name="logInMailUserName" id="logInMailUserName" placeholder=""/>
                    <label htmlFor="logInMailUserName">Gebruikersnaam</label>
                </div>
                <div className="logInRegisterCredentialField">
                    <input type="text" name="logInPassword" id="logInPassword" placeholder=""/>
                    <label htmlFor="logInPassword">Wachtwoord</label>
                </div>
            </div>
            <Link to="/register" style={{color: "#0075ff", textDecoration: "underline", marginTop: "4px"}}>Nog geen account? Maak account</Link>
            <div className="logInRegisterActionButtons">
                <button>
                    Log In
                </button>
            </div>
        </div>
    </div>
  );
}

export default LogInBox;
