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
                <div className="logInRegisterCredentialField" style={{marginTop: "24px"}}>
                    <input type="password" name="logInPassword" id="logInPassword" placeholder=""/>
                    <label htmlFor="logInPassword">Wachtwoord</label>
                </div>
            </div>
            <Link to="/forgotPassword" className="logInRegisterLinks">Wachtwoord vergeten?</Link>
            <div className="logInRegisterActionButtons">
                <button>
                    Log In
                </button>
                <p>Nog geen account? <Link to="/register"><span className="logInRegisterLinks">Maak account</span></Link></p>
            </div>
        </div>
    </div>
  );
}

export default LogInBox;
