import "./intro.scss"
import me from "../../assets/images/me.png"
import down from "../../assets/images/down.png"
import {init} from 'ityped'
import {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";

export default function Intro() {
    const [t] = useTranslation("global");
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Computer engineering student", "Software Developer", "Novel writer", "Videogames and films passionate", "Experienced swimmer"]
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={me} alt="me"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>{t("intro.first")}</h2>
                    <h1>{t("intro.second")}</h1>
                    <h3>{t("intro.third")}<span ref={textRef}/></h3></div>
                <a href="#portfolio">
                    <img src={down} alt=""/>
                </a>
            </div>
        </div>
    )
}