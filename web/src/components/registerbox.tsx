import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import "../css/logInRegister.css";
import { UserService } from "../services/userService";
import { useState } from "react";

async function submitRegisterForm(
  firstnameValue: string,
  lastnameValue: string,
  emailValue: string,
  passwordValue: string
): Promise<void> {
  const _userService: UserService = new UserService();

  await _userService.register({
    firstname: firstnameValue,
    lastname: lastnameValue,
    email: emailValue,
    password: passwordValue,
  });
}

function RegisterBox(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/typedef
  const [firstname, setFirstname] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [lastname, setLastname] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [mail, setMail] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [password, setPassword] = useState("");

  const navigate: NavigateFunction = useNavigate();

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
              onChange={(e: any) => setFirstname(e.target.value)}
            />
            <label htmlFor="logInFirstName">Voornaam</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="text"
              name="logInLastName"
              id="logInLastName"
              placeholder=""
              onChange={(e: any) => setLastname(e.target.value)}
            />
            <label htmlFor="logInLastName">Achternaam</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="text"
              name="logInMail"
              id="logInMail"
              placeholder=""
              onChange={(e: any) => setMail(e.target.value)}
            />
            <label htmlFor="logInMail">E-mail</label>
          </div>
          <div className="logInRegisterCredentialField">
            <input
              type="password"
              name="logInPassword"
              id="logInPassword"
              placeholder=""
              onChange={(e: any) => setPassword(e.target.value)}
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
            onClick={() => {
              submitRegisterForm(firstname, lastname, mail, password);
              navigate("/")
            }}
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
