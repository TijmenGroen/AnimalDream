import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import "../css/logInRegister.css";
import { UserService } from "../services/userService";
import { useState } from "react";
import { CircleAlert } from "lucide-react";

function LogInBox(): JSX.Element {
  const userService: UserService = new UserService();

  // eslint-disable-next-line @typescript-eslint/typedef
  const [email, setEmail] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [announcementMessage, setAnnouncementMessage] = useState(<div></div>);
  // eslint-disable-next-line @typescript-eslint/typedef
  const [emailColor, setEmailColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [passwordColor, setPasswordColor] = useState("");

  const navigate: NavigateFunction = useNavigate();

  const handleLogIn: () => Promise<void> = async () => {
    setEmailColor("")
    setPasswordColor("")
    if (email === "") setEmailColor("#cc0000");
    if (password === "") setPasswordColor("#cc0000");
    if (email === "" || password === "") {
      setAnnouncementMessage(
        <div>
          <CircleAlert style={{ transform: "translateY(4px)" }} />
          <br />
          Vul alle velden in
        </div>
      );
      return
    }
    const user: boolean = await userService.logIn({
      email: email,
      password: password,
    });
    if (user === true) navigate("/");
    else
      setAnnouncementMessage(
        <div>
          <CircleAlert style={{ transform: "translateY(4px)" }} />
          <br />
          Geen account gevonden met dit email of incorrect wachtwoord
        </div>
      );
  };

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
              style={{ borderColor: emailColor }}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <label htmlFor="logInMailUserName">E-mail</label>
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
              style={{ borderColor: passwordColor }}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <label htmlFor="logInPassword">Wachtwoord</label>
          </div>
        </div>
        <Link to="/forgotPassword" className="logInRegisterLinks">
          Wachtwoord vergeten?
        </Link>
        <div className="logInRegisterActionButtons">
          <div className="announcement">{announcementMessage}</div>
          <button
            onClick={async () => {
              handleLogIn();
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
