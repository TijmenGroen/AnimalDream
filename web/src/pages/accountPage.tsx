import ProfileButtons from "../components/profileButtons";
import UserDataContainer from "../components/userDataContainer";
import "../css/account.css";

function AccountPage(): JSX.Element {
    return (
        <div className="accountPage">
            <ProfileButtons />
            <UserDataContainer />
        </div>
    );
}

export default AccountPage;