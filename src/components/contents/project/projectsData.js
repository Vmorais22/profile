import intellij from "../../../assets/images/intellij-idea_logo_300x300.png"
import postman from "../../../assets/images/postman.png"
import vs from "../../../assets/images/visual studio.png"
import adobexd from "../../../assets/images/adobe.png"
import react from "../../../assets/images/react.png"
import cplusplus from "../../../assets/images/c++.png"
import js from "../../../assets/images/JS.png"
import kotlin from "../../../assets/images/kotlin.png"
import unity from "../../../assets/images/unity.png"
import yayOS from "../../../assets/images/exampleYayos1.PNG"
import pockles from "../../../assets/images/Sin título.png"
import mb from "../../../assets/images/mb.png"
import mario from "../../../assets/images/mario.png"
import matlab from "../../../assets/images/Matlab-1.png"
import señales from "../../../assets/images/signsdetec.png"
import hn from "../../../assets/images/hn.png"
import qoe from "../../../assets/images/qoemeter.png"

export const projectData = [
    {
        id: 1,
        title: 'projectsPortfolio.1.inside.title',
        summary: "projectsPortfolio.1.inside.summary",
        icons: {
            ntools: 3,
            tools: [intellij,
                postman,
                adobexd],

            nlanguages: 2,
            languagues: [react, js],
        },
        text1: "projectsPortfolio.1.inside.text1",
        text2:"projectsPortfolio.1.inside.text2",
        photo: yayOS,
        opt: [yayOS,señales],
        git: "https://github.com/Vmorais22/yayOS",
        //descarga
    }, {
        id: 2,
        title: "projectsPortfolio.2.inside.title",
        summary: "projectsPortfolio.2.inside.summary",
        icons: {
            ntools: 4,
            tools: [intellij,
                kotlin,
                postman,
                adobexd],
            nlanguages: 1,
            languagues: [js],
        },
        text1: "projectsPortfolio.2.inside.text1",
        text2:"projectsPortfolio.1.inside.text2",
        photo: pockles,
        opt: [yayOS,yayOS,yayOS],
        git: "https://bitbucket.org/sergiovmdo9797/pockles-app/src/develop/",
    },
    {
        id: 3,
        title: "projectsPortfolio.3.inside.title",
        summary: "projectsPortfolio.3.inside.summary",
        icons: {
            ntools: 3,
            tools: [unity,
                vs,
                mb],
            nlanguages: 1,
            languagues: [cplusplus],
        },
        text1: "projectsPortfolio.3.inside.text1",
        text2:"projectsPortfolio.3.inside.text2",
        photo: mario,
        opt: [yayOS,yayOS,yayOS],
        git: "https://github.com/SergioArcos1999/3DGame-VJ",
    },
    {
        id: 4,
        title: "projectsPortfolio.4.inside.title",
        summary: "projectsPortfolio.4.inside.summary",
        icons: {
            ntools: 1,
            tools: [matlab],
            nlanguages: 1,
            languagues: [matlab],
        },
        text1: "projectsPortfolio.4.inside.text1",
        text2:"projectsPortfolio.4.inside.text2",
        photo: señales,
        opt: [yayOS,yayOS,yayOS],
        git: "https://bitbucket.org/paudastis/practica/src/master/",
    },
    {
        id: 5,
        title: "projectsPortfolio.5.inside.title",
        summary: "projectsPortfolio.5.inside.summary",
        icons: {
            ntools: 2,
            tools: [intellij, postman],
            nlanguages: 2,
            languagues: [react, js],
        },
        text1: "projectsPortfolio.5.inside.text1",
        text2:"projectsPortfolio.5.inside.text2",
        photo: hn,
        opt: [yayOS,yayOS,yayOS],
        git: "https://bitbucket.org/sergiovmdo9797/hackernews-web-g12e/src/master/",
    },
    {
        id: 6,
        title: "projectsPortfolio.6.inside.title",
        summary: "projectsPortfolio.6.inside.summary",
        icons: {
            ntools: 2,
            tools: [intellij, postman],
            nlanguages: 2,
            languagues: [react, js],
        },
        text1: "projectsPortfolio.6.inside.text1",
        text2:"projectsPortfolio.6.inside.text2",
        photo: qoe,
        opt: [yayOS,yayOS,yayOS],
        git: "https://bitbucket.org/sergiovmdo9797/hackernews-web-g12e/src/master/",
    },
];