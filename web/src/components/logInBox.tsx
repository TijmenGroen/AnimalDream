import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import "../css/logInRegister.css";
import { UserService } from "../services/userService";
import { useState } from "react";


function LogInBox(): JSX.Element {
    const userService: UserService = new UserService();
    
    // eslint-disable-next-line @typescript-eslint/typedef
    const [email, setEmail] = useState("");
    // eslint-disable-next-line @typescript-eslint/typedef
    const [password, setPassword] = useState("");
    
    const navigate: NavigateFunction = useNavigate();


  return (
    <div className="logInRegisterBox">
      <div className="logInRegisterBody">
        <div className="logInRegisterHead">Welkom terug</div>
        <div className="logInRegisterContent">
          <div className="logInRegisterCredentialField">
            <input
              type="text"
              name="logInMailUserName"
              id="logInMailUserName"
              placeholder=""
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <label htmlFor="logInMailUserName">Gebruikersnaam</label>
          </div>
          <div
            className="logInRegisterCredentialField"
            style={{ marginTop: "24px" }}
          >
            <input
              type="password"
              name="logInPassword"
              id="logInPassword"
              placeholder=""
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <label htmlFor="logInPassword">Wachtwoord</label>
          </div>
        </div>
        <Link to="/forgotPassword" className="logInRegisterLinks">
          Wachtwoord vergeten?
        </Link>
        <div className="logInRegisterActionButtons">
          <button
            onClick={async () => {
              const user: boolean = await userService.logIn({
                email: email,
                password: password,
              });
                if(user === true) navigate("/")
                else return ErrorMessage;
            }}
          >
            Log In
          </button>
          <p>
            Nog geen account?{" "}
            <Link to="/register">
              <span className="logInRegisterLinks">Maak account</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogInBox;

function ErrorMessage(): JSX.Element {
    return (
        <div>
            
        </div>
    );
}