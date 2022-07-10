import "./menu.scss"
import {useTranslation} from "react-i18next";
import esFlag from "../../assets/images/es.png"
import enFlag from "../../assets/images/en.png"

export default function Menu({menuOpen,setMenuOpen}) {
    const [t, i18n] = useTranslation("global");
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <hr/>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#intro">{t("menu.intro")}</a>
                </li>
                <hr/>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#works">{t("menu.works")}</a>
                </li>
                <hr/>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#portfolio">{t("menu.portfolio")}</a>
                </li>
                <hr/>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#testimonials">{t("menu.testimonials")}</a>
                </li>
                <hr/>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#contact">{t("menu.contact")}</a>
                </li>
                <hr className="fixed_bar"/>
                <li onClick={()=>setMenuOpen(false)}>
                        <img src={esFlag} alt="" onClick={() => i18n.changeLanguage("es")}/>
                        <img src={enFlag} alt="" onClick={() => i18n.changeLanguage("en")}/>
                </li>
                <hr/>
            </ul>
        </div>
    )
}
