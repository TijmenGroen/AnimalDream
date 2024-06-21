import { useEffect, useState } from "react";
import ProfileButtons from "../components/profileButtons";
import UserDataContainer from "../components/userDataContainer";
import "../css/account.css";
import { UserService } from "../services/userService";
import { NavigateFunction, useNavigate } from "react-router-dom";

function AccountPage(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  // eslint-disable-next-line @typescript-eslint/typedef
  const [currentAccountPage, setCurrentAccountPage] = useState("userData");

  useEffect(() => {
    const userService: UserService = new UserService();
    const loggedIn: boolean = userService.checkIfLoggedIn();
    if (!loggedIn) navigate("/");
  });

  function renderCurrentPage(): JSX.Element {
    if (currentAccountPage === "userData")
      return (
        <>
          <UserDataContainer />
        </>
      );
    if (currentAccountPage === "orders") return <>orders</>;
    if (currentAccountPage === "customerPortal") return <>customerPortal</>;
    else return <>Er is een fout opgetreden</>;
  }

  function switchAccountPages(page: string): void {
    setCurrentAccountPage(page);
  }

  return (
    <div className="accountPage">
      <ProfileButtons
        switchFunction={switchAccountPages}
        currentPage={currentAccountPage}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default AccountPage;
