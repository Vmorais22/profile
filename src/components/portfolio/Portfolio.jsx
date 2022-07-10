import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react";
import {
    personalPortfolio, projectsPortfolio, researchPortfolio, otherPortfolio
} from "../../data";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
export default function Portfolio() {
    const [t] = useTranslation("global");
    const [selected, setSelected] = useState("personal");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "personal",
            title: t("portfolio.titles.personal"),
        },
        {
            id: "projects",
            title: t("portfolio.titles.projects"),
        },
        {
            id: "research",
            title: t("portfolio.titles.research"),
        },
        {
            id: "other",
            title: t("portfolio.titles.other"),
        },
    ];

    useEffect(() => {
        // eslint-disable-next-line default-case
        switch (selected) {
            case "personal":
                setData(personalPortfolio);
                break;
            case "projects":
                setData(projectsPortfolio);
                break;
            case "research":
                setData(researchPortfolio);
                break;
            case "other":
                setData(otherPortfolio);
                break;
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>{t("portfolio.titles.main")}</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                                   id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <NavLink className="item" to={d.link} style={{textDecoration: 'none'}}>
                        <img src={d.img} alt="cv"/>
                        <h3>{t(d.title)}</h3>
                    </NavLink>

                ))}
            </div>

        </div>
    )
}