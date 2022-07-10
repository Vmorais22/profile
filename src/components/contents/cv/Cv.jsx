import imges from "../../../assets/images/cves.PNG";
import imgen from "../../../assets/images/cven.PNG";
import "./cv.scss"
import CVES from "../../../assets/documents/CV Spanish.pdf";
import CVEN from "../../../assets/documents/CV English.pdf";
import library from "../../../assets/images/empty-bookcase.jpg"
import {useTranslation} from "react-i18next";


export default function Cv() {

    const [t] = useTranslation("global");

    return (
        <div className="cvDisplayer">
            <div className="title">
                <h1>{t("curriculum")}</h1>
            </div>
            <br/>
            <div className="container"  style={{
                backgroundImage: `url(${library})`
            }}>
                <div className="pdfContainer" style={{
                    backgroundImage: `url(${imges})`
                }}>
                    <a href={CVES} target="_blank" rel="noreferrer">{t("download")}</a>
                </div>
                <div className="pdfContainer" style={{
                    backgroundImage: `url(${imgen})`
                }}>
                    <a href={CVEN} target="_blank" rel="noreferrer">{t("download")}</a>
                </div>
            </div>


        </div>
    );
}