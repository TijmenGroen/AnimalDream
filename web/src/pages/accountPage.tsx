import { useEffect } from "react";
import ProfileButtons from "../components/profileButtons";
import UserDataContainer from "../components/userDataContainer";
import "../css/account.css";
import { UserService } from "../services/userService";
import { NavigateFunction, useNavigate } from "react-router-dom";

function AccountPage(): JSX.Element {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const userService: UserService = new UserService();
        const loggedIn: boolean = userService.checkIfLoggedIn()
        if(!loggedIn) navigate("/")
    })

    return (
        <div className="accountPage">
            <ProfileButtons />
            <UserDataContainer />
        </div>
    );
}

export default AccountPage;