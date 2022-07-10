import "./topbar.scss"
import logo from "../../assets/images/logo.jpg"
import {useTranslation} from "react-i18next";
import {LinkedIn, MailOutline} from "@material-ui/icons"


export default function Topbar({menuOpen, setMenuOpen}) {
    const [t] = useTranslation("global");
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="/#intro">
                        <img className="logo" src={logo} alt="Logo"/>
                    </a>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <a href={"https://www.linkedin.com/in/v%C3%ADctor-morais-936583217/"}>{t("topbar.linkedin-spam")}</a>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon"/>
                        <span>{t("topbar.email")}</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"/>
                       <span className="line2"/>
                       <span className="line3"/>
                   </div>
                </div>
            </div>

        </div>
    )
}