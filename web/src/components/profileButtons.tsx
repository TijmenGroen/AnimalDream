import {
  Laptop,
  LogOut,
  Package,
  SquareGanttChart,
  UserRoundCog,
} from "lucide-react";
import "../css/account.css";
import { UserService } from "../services/userService";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfileButtons(props: {
  switchFunction: any;
  currentPage: string;
}): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  // eslint-disable-next-line @typescript-eslint/typedef
  const [activeOffset, setActiveOffset] = useState(0);

  const userDataOffset: number = 36 * 0;
  const ordersOffset: number = 36 * 1;
  const customerPortalOffset: number = 36 * 2;

  useEffect(() => {
    checkActivePage();
  });

  function checkActivePage(): void {
    if (props.currentPage === "userData") setActiveOffset(userDataOffset);
    if (props.currentPage === "orders") setActiveOffset(ordersOffset);
    if (props.currentPage === "customerPortal")
      setActiveOffset(customerPortalOffset);
  }

  async function logOut(): Promise<void> {
    const userService: UserService = new UserService();
    await userService.logOut();
    navigate("/");
  }

  return (
    <div className="profileButtons">
      <div className="profileButtonsHeader">
        <div>
          <UserRoundCog size={32} /> Uw Profiel
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "fit-content",
            transform: `translateY(${activeOffset}px)`,
            transition: "all ease-in-out 300ms",
            minHeight: "20px",
            minWidth: "6px",
            backgroundColor: "#121675",
            borderRadius: "1px",
            paddingBottom: "3px"
          }}
        >
        </div>
        <div className="profileButtonsActions">
          <div
            onClick={() => {
              props.switchFunction("userData");
            }}
          >
            <SquareGanttChart /> Gegevens
          </div>
          <div
            onClick={() => {
              props.switchFunction("orders");
            }}
          >
            <Package /> Bestellingen
          </div>
          <div
            onClick={() => {
              props.switchFunction("customerPortal");
            }}
          >
            <Laptop /> Klant Portaal
          </div>
          <div
            onClick={() => {
              logOut();
            }}
          >
            <LogOut /> Uitloggen
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileButtons;
