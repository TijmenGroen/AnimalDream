import { Link } from "react-router-dom";
import "../css/logInRegister.css";

function RegisterBox() {
  return (
    <div className="logInRegisterBox">
        <div className="logInRegisterBody">
            <div className="logInRegisterHead">
                Welkom
            </div>
            <div className="logInRegisterContent">
                <div className="logInRegisterCredentialField">
                    <input type="text" name="logInUserName" id="logInUserName" placeholder=""/>
                    <label htmlFor="logInMailUserName">Gebruikersnaam</label>
                </div>
                <div className="logInRegisterCredentialField">
                    <input type="text" name="logInFirstName" id="logInFirstName" placeholder=""/>
                    <label htmlFor="logInFirstName">Voornaam</label>
                </div>
                <div className="logInRegisterCredentialField">
                    <input type="text" name="logInLastName" id="logInLastName" placeholder=""/>
                    <label htmlFor="logInLastName">Achternaam</label>
                </div>
                <div className="logInRegisterCredentialField">
                    <input type="text" name="logInMail" id="logInMail" placeholder=""/>
                    <label htmlFor="logInMail">E-mail</label>
                </div>
                <div className="logInRegisterCredentialField">
                    <input type="password" name="logInPassword" id="logInPassword" placeholder=""/>
                    <label htmlFor="logInPassword">Wachtwoord</label>
                </div>
                <div className="logInRegisterCredentialField">
                    <input type="password" name="logInRepeat" id="logInRepeat" placeholder=""/>
                    <label htmlFor="logInRepeat">Herhaal wachtwoord</label>
                </div>
            </div>
            <div className="logInRegisterActionButtons">
                <button>
                    Maak account
                </button>
                <p>Al een account? <Link to="/login" ><span className="logInRegisterLinks">Log in</span></Link></p>
            </div>
        </div>
    </div>
  );
}

export default RegisterBox;
