import {useTranslation} from "react-i18next";
import "./debath.scss";
import headerPhoto from "../../../assets/images/debath-photo.PNG"
import frame1 from "../../../assets/images/frameDebath1.png"
import frame2 from "../../../assets/images/frameDebath2.png"

export default function Debath() {
    const [t] = useTranslation("global");
    return (
        <div className="debath">
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleLg">{t("content.debath.h1")}</span>
                    <span className="headerTitleLg">{t("content.debath.h2")}</span>
                </div>
                <img
                    className="headerImg"
                    src={headerPhoto}
                    alt=""
                />
            </div>
            <div className="item">
                <div className="left1">
                    <div className="leftContainer">
                        <h1>{t("content.debath.sub1")}</h1>
                        <p>{t("content.debath.p1")}</p>
                    </div>
                </div>
                <div className="right1">
                    <img
                        src={frame2}
                        alt=""
                    />
                </div>
            </div>
            <div className="item">
                <div className="left2">
                    <img
                        src={frame1}
                        alt=""
                    />
                </div>
                <div className="right2">
                    <div className="leftContainer">
                        <h1>{t("content.debath.sub2")}</h1>
                        <p>{t("content.debath.p2")}</p>
                    </div>

                </div>
            </div>
        </div>

    );

}
