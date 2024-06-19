import "../css/logInRegister.css";
import LogInBox from "../components/logInBox";
import RegisterBox from "../components/registerBox";

export function LogInPage() {
  return (
    <div className="logInRegisterPage">
      <LogInBox />
    </div>
  );
}

export function RegisterPage() {
  return (
    <div className="logInRegisterPage">
      <RegisterBox />
    </div>
  );
}
