import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import "../css/logInRegister.css";
import { UserService } from "../services/userService";
import { useState } from "react";
import { CircleAlert } from "lucide-react";

function RegisterBox(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/typedef
  const [firstname, setFirstname] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [lastname, setLastname] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [mail, setMail] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [repeatPassword, setRepeatPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [firstnameColor, setFirstnameColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [lastnameColor, setLastnameColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [emailColor, setEmailColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [passwordColor, setPasswordColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [repeatPasswordColor, setRepeatPasswordColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [announcementMessage, setAnnouncementMessage] = useState(<div></div>);

  const navigate: NavigateFunction = useNavigate();

  const handleRegister: any = async (
    firstnameValue: string,
    lastnameValue: string,
    emailValue: string,
    passwordValue: string
  ): Promise<void> => {
    setFirstnameColor("");
    if (firstname === "") setFirstnameColor("#cc0000");

    setLastnameColor("");
    if (lastname === "") setLastnameColor("#cc0000");

    setEmailColor("");
    if (mail === "") setEmailColor("#cc0000");

    setPasswordColor("");
    if (password === "") setPasswordColor("#cc0000");

    setRepeatPasswordColor("");
    if (repeatPassword === "") setRepeatPasswordColor("#cc0000");

    if (
      firstname === "" ||
      lastname === "" ||
      mail === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setAnnouncementMessage(
        <div>
          <CircleAlert style={{ transform: "translateY(4px)" }} />
          <br />
          Vul alle velden in
        </div>
      );
      return;
    }

    if(password !== repeatPassword) {
      setPasswordColor("#cc0000");
      setRepeatPasswordColor("#cc0000");
      setAnnouncementMessage(
        <div>
          <CircleAlert style={{ transform: "translateY(4px)" }} />
          <br />
          Wachtwoorden komen niet overeen
        </div>
      );
      return;
    }

    const userService: UserService = new UserService();

    const result: any = await userService.register({
      firstname: firstnameValue,
      lastname: lastnameValue,
      email: emailValue,
      password: passwordValue,
    });
    if (result === true) navigate("/");
    else {
      setAnnouncementMessage(
        <div>
          <CircleAlert style={{ transform: "translateY(4px)" }} />
          <br />
          Er bestaat al een account met dit email
        </div>
      );
      return;
    }
  };

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
              style={{ borderColor: firstnameColor }}
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
              style={{ borderColor: lastnameColor }}
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
              style={{ borderColor: emailColor }}
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
              style={{ borderColor: passwordColor }}
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
              style={{ borderColor: repeatPasswordColor }}
              onChange={(e: any) => setRepeatPassword(e.target.value)}
            />
            <label htmlFor="logInRepeat">Herhaal wachtwoord</label>
          </div>
        </div>
        <div className="logInRegisterActionButtons">
          <div className="announcement">{announcementMessage}</div>
          <button
            onClick={() => {
              handleRegister(firstname, lastname, mail, password);
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
