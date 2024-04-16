import { Link } from "react-router-dom";
import "../css/logInRegister.css";
import { userService } from "../services/userService";
import { useState } from "react";

async function submitRegisterForm(
  firstnameValue: string,
  lastnameValue: string,
  emailValue: string,
  passwordValue: string
): Promise<void> {
    const _userService: userService = new userService();

  const result = await _userService.register({
    firstname: firstnameValue,
    lastname: lastnameValue,
    email: emailValue,
    password: passwordValue,
  });

  console.log(result)
}

function RegisterBox() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="logInRegisterBox">
      <div className="logInRegisterBody">
        <div className="logInRegisterHead">Welkom</div>
        <div className="logInRegisterContent">
          <div className="logInRegisterCredentialField">
            <input
              type="text"
              name="logInFirstName"
              id="logInFirstName"
              placeholder=""
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="logInFirstName">Voornaam</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="text"
              name="logInLastName"
              id="logInLastName"
              placeholder=""
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="logInLastName">Achternaam</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="text"
              name="logInMail"
              id="logInMail"
              placeholder=""
              onChange={(e) => setMail(e.target.value)}
            />
            <label htmlFor="logInMail">E-mail</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="password"
              name="logInPassword"
              id="logInPassword"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="logInPassword">Wachtwoord</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="password"
              name="logInRepeat"
              id="logInRepeat"
              placeholder=""
            />
            <label htmlFor="logInRepeat">Herhaal wachtwoord</label>
          </div>
        </div>
        <div className="logInRegisterActionButtons">
          <button
            onClick={() => {submitRegisterForm(firstname, lastname, mail, password)}}
          >
            Maak account
          </button>
          <p>
            Al een account?{" "}
            <Link to="/login">
              <span className="logInRegisterLinks">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterBox;
