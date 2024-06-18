import { Laptop, LogOut, Package, SquareGanttChart, UserRoundCog } from "lucide-react";
import "../css/account.css";

function ProfileButtons(): JSX.Element {
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
                <div>
                    <LogOut /> Uitloggen
                </div>
            </div>
        </div>
    );
}

export default ProfileButtons;