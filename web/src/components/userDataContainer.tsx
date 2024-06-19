import { useEffect, useState } from "react";
import "../css/account.css";
import { UserService } from "../services/userService";
import { userData } from "@shared/types/userData"

function UserDataContainer(): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/typedef
  const [userFirstname, setUserFirstname] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [userLastname, setUserLastname] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [userEmail, setUserEmail] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [userPhoneNumber, setUserPhoneNumber] = useState("N.v.t");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [userTitle, setUserTitle] = useState("Anders");

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(): Promise<void> {
    const userService: UserService = new UserService();
    if(!userService) return
    const userData: userData = await userService.getUserData() as userData
    setUserFirstname(userData.firstname)
    setUserLastname(userData.lastname)
    setUserEmail(userData.email)
    if(userData.phoneNumber) setUserPhoneNumber(userData.phoneNumber)
    if(userData.title)setUserTitle(userData.title)
  }

  return (
    <div className="userDataContainer">
      <div className="userDataContainerPart">
        <div className="userDataItemContainer">
          <div className="userDataItem">
            <div className="userDataItemHeader">Naam</div>
            <div className="userDataItemContent">{userFirstname} {userLastname}</div>
          </div>
          <div className="userDataItem">
            <div className="userDataItemHeader">E-mail</div>
            <div className="userDataItemContent">{userEmail}</div>
          </div>
          <div className="userDataItem">
            <div className="userDataItemHeader">Aanhef</div>
            <div className="userDataItemContent">{userTitle}</div>
          </div>
          <div className="userDataItem">
            <div className="userDataItemHeader">Telefoon Nummer</div>
            <div className="userDataItemContent">{userPhoneNumber}</div>
          </div>
        </div>
        <div className="userDataButtonHolder">
          <button>Wijzigen</button>
        </div>
      </div>
      <hr/>
      <div className="userDataItemContainer">
        <div className="userDataItem">
          <div className="userDataItemHeader">Wachtwoord</div>
          <div className="userDataItemContent">************</div>
        </div>
        <div className="userDataButtonHolder">
          <button>Wijzigen</button>
        </div>
      </div>
      <hr/>
      <div className="userDataItemContainer">
        <div className="userDataItem">
          Geen adressen
        </div>
        <div className="userDataButtonHolder">
          <button>Adress toevoegen</button>
        </div>
      </div>
    </div>
  );
}

export default UserDataContainer;
