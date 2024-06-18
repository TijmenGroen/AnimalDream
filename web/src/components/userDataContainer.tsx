import "../css/account.css";

function UserDataContainer(): JSX.Element {
  return (
    <div className="userDataContainer">
      <div className="userDataContainerPart">
        <div className="userDataItemContainer">
          <div className="userDataItem">
            <div className="userDataItemHeader">Naam</div>
            <div className="userDataItemContent">Tijmen Groen</div>
          </div>
          <div className="userDataItem">
            <div className="userDataItemHeader">E-mail</div>
            <div className="userDataItemContent">tijmen.groen@outlook.com</div>
          </div>
          <div className="userDataItem">
            <div className="userDataItemHeader">Geboorte Datum</div>
            <div className="userDataItemContent">08-06-2006</div>
          </div>
          <div className="userDataItem">
            <div className="userDataItemHeader">Telefoon Nummer</div>
            <div className="userDataItemContent">06-21135005</div>
          </div>
        </div>
        <div className="userDataButtonHolder">
          <button>Wijzigen</button>
        </div>
      </div>
      <hr
        style={{ borderWidth: "1px", width: "100%", borderColor: "#121675" }}
      />
      <div className="userDataItemContainer">
        <div className="userDataItem">
          <div className="userDataItemHeader">Wachtwoord</div>
          <div className="userDataItemContent">************</div>
        </div>
        <div className="userDataButtonHolder">
          <button>Wijzigen</button>
        </div>
      </div>
    </div>
  );
}

export default UserDataContainer;
