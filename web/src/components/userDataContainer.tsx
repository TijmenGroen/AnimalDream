import { useEffect, useState } from "react";
import "../css/account.css";
import { UserService } from "../services/userService";
import { userData } from "@shared/types/userData";
import ModalBox from "../components/modalBox";

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

  // eslint-disable-next-line @typescript-eslint/typedef
  const [modalBoxDisplay, setModalBoxDisplay] = useState(false);

  // eslint-disable-next-line @typescript-eslint/typedef
  const [addressCity, setAddressCity] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [addressStreet, setAddressStreet] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [addressHouseNumber, setAddressHouseNumber] = useState("");
  // eslint-disable-next-line @typescript-eslint/typedef
  const [addressPostalCode, setAddressPostalCode] = useState("");

  useEffect(() => {
    fetchData();
  }, [modalBoxDisplay]);

  async function fetchData(): Promise<void> {
    const userService: UserService = new UserService();
    if (!userService) return;
    const userData: userData = (await userService.getUserData()) as userData;
    setUserFirstname(userData.firstname);
    setUserLastname(userData.lastname);
    setUserEmail(userData.email);
    if (userData.phoneNumber) setUserPhoneNumber(userData.phoneNumber);
    if (userData.title) setUserTitle(userData.title);
  }

  async function submitAddress(): Promise<void> {
    const userService: UserService = new UserService();
    await userService.addAddressToUser({
      postalCode: addressPostalCode,
      city: addressCity,
      street: addressStreet,
      houseNumber: addressHouseNumber
    })
  }

  // eslint-disable-next-line @typescript-eslint/typedef
  const toggleModalBox = (): void => {
    if (modalBoxDisplay) setModalBoxDisplay(false);
    if (!modalBoxDisplay) setModalBoxDisplay(true);
  };

  return (
    <>
      <ModalBox
        show={modalBoxDisplay}
        showFunction={toggleModalBox}
        header="Adres Toevoegen"
        body={
          <div className="addAddress">
            <div className="addAddressItem">
              <div>Postcode</div>
              <input
                type="text"
                id="postalCode"
                onChange={(e: any) => {
                  setAddressPostalCode(e.target.value);
                }}
              />
            </div>
            <div className="addAddressItem">
              <div>Huisnummer</div>
              <input
                type="text"
                id="houseNumber"
                onChange={(e: any) => {
                  setAddressHouseNumber(e.target.value);
                }}
              />
            </div>
            <div className="addAddressItem">
              <div>Straat</div>
              <input
                type="text"
                id="street"
                onChange={(e: any) => {
                  setAddressStreet(e.target.value);
                }}
              />
            </div>
            <div className="addAddressItem">
              <div>Stad</div>
              <input
                type="text"
                id="city"
                onChange={(e: any) => {
                  setAddressCity(e.target.value);
                }}
              />
            </div>
            <button style={{ marginTop: "16px" }} onClick={() => {
              submitAddress()
              toggleModalBox
            }}>Toevoegen</button>
          </div>
        }
      />

      <div className="userDataContainer">
        <div className="userDataContainerPart">
          <div className="userDataItemContainer">
            <div className="userDataItem">
              <div className="userDataItemHeader">Naam</div>
              <div className="userDataItemContent">
                {userFirstname} {userLastname}
              </div>
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
        <hr />
        <div className="userDataItemContainer">
          <div className="userDataItem">
            <div className="userDataItemHeader">Wachtwoord</div>
            <div className="userDataItemContent">************</div>
          </div>
          <div className="userDataButtonHolder">
            <button>Wijzigen</button>
          </div>
        </div>
        <hr />
        <div className="userDataItemContainer">
          <div className="userDataItem">Geen adressen</div>
          <div className="userDataButtonHolder">
            <button onClick={toggleModalBox}>Adres toevoegen</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDataContainer;
