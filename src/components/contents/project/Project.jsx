import "./project.scss"
import {projectData} from "./projectsData";
import {withTranslation} from "react-i18next";
import {Component} from "react";

class Project extends Component {


    render() {
        const t = this.props.t;
        const id = this.props.id;
        return (

            <div className="project">
                <div className="title">
                    <h1>{t(projectData.find(x => x.id === parseInt(id, 10)).title)}</h1>
                </div>

                <div className="summary">
                    <p>{t(projectData.find(x => x.id === parseInt(id, 10)).summary)}</p>
                </div>

                <div className="iconsContainer">
                    <div className="tools">
                        <h2>{t("tools")}</h2>
                        <div className="icon">
                            {(projectData.find(x => x.id === parseInt(id, 10)).icons.tools).map((p) => (
                                <img src={p}
                                     alt="Tools"/>))}
                        </div>
                    </div>
                    <div className="languages">
                        <h2>{t("L&F")}</h2>
                        <div className="icon">
                            <div className="icon">
                                {(projectData.find(x => x.id === parseInt(id, 10)).icons.languagues).map((p) => (
                                    <img src={p}
                                         alt="L&F"/>))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="text">
                        <p>{t(projectData.find(x => x.id === parseInt(id, 10)).text1)}</p>
                        <br/>
                        <p>{t(projectData.find(x => x.id === parseInt(id, 10)).text2)}</p>
                    </div>
                    <div className="photo">
                        <img src={projectData.find(x => x.id === parseInt(id, 10)).photo} title="Intellij"
                             alt="Intellij"/>
                    </div>
                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div className="buttonContainer">
                    <a href={projectData.find(x => x.id === parseInt(id, 10)).git}><span>{t("checkgit")}</span></a>
                    <a href="/"><span>{t("dwl")}</span></a>
                </div>
            </div>
        );
    }
}

export default withTranslation('global')(Project);