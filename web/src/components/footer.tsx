import { Contact } from "lucide-react";
import "../css/footer.css"

function Footer(): JSX.Element {
  return (
    <div className="footer">
        <div className="footerContent">
            <div className="footerPart" style={{fontSize: "x-large", fontWeight: "600", minWidth: "110px"}}>
                <p>Contact</p>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", minWidth: "330px"}}>
                <Contact size={48}/>
                <div className="footerPart" style={{marginLeft: "8px"}}>
                    <p>Animal-dream2021@outlook.com</p>
                    <p>06-123456789</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
