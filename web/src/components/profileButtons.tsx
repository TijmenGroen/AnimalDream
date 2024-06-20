import { Laptop, LogOut, Package, SquareGanttChart, UserRoundCog } from "lucide-react";
import "../css/account.css";
import { UserService } from "../services/userService";
import { NavigateFunction, useNavigate } from "react-router-dom";

function ProfileButtons(): JSX.Element {
const navigate: NavigateFunction = useNavigate();

async function logOut(): Promise<void> {
    const userService: UserService = new UserService();
    await userService.logOut()
    navigate("/")
}

    return (
        <div className="profileButtons">
            <div className="profileButtonsHeader">
                <div>
                    <UserRoundCog size={32}/> Uw Profiel
                </div>
            </div>
            <div className="profileButtonsActions">
                <div>
                    <SquareGanttChart /> Gegevens
                </div>
                <div>
                    <Package /> Bestellingen
                </div>
                <div>
                    <Laptop /> Klant Portaal
                </div>
                <div onClick={() => {
                    logOut()
                }}>
                    <LogOut /> Uitloggen
                </div>
            </div>
        </div>
    );
}

export default ProfileButtons;