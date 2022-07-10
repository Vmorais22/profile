import "./testimonials.scss";
import {useTranslation} from "react-i18next";
import construction from "../../assets/images/pngjoy.com_coming-soon-sign-site-under-construction-png-transparent_9515370.png"
import img1 from "../../assets/images/CuerdosYLocosPortada.PNG";
import img2 from "../../assets/images/verumIstaPortada.PNG";
import img3 from "../../assets/images/carpeDiemPortada.PNG";
import cyl from "../../assets/documents/fragmentoMuestraCuerdosYLocos.pdf";
import vi from "../../assets/documents/fragmentoMuestraVerumIsta.pdf";
import cd from "../../assets/documents/fragmentoMuestraCarpeDiem.pdf";

export default function Testimonials() {
    const ready = true;
    const [t] = useTranslation("global");
    const data = [
        {
            id: 1,
            name: "Verum Ista",
            title: "2018/2019",
            img:
                img2,
            book: vi,
            desc:
                "Quién le iba a decir a Adrián que el oscuro secreto que ha estado guardando estos últimos 17 años correría el riesgo de salir a la luz cuando un terrorista amenaza con atentar contra España si no le entregan el REG-7. Descubre la secuela de Carpe Diem cargada de acción, intriga y suspense coprotagonizada esta vez por dos Mendozas.",
        },
        {
            id: 2,
            name: "Cuerdos y Locos",
            title: "2020",
            img:
            img1,
            book: cyl,
            desc:
                "En medio de la inmensidad del mar hay una remota isla... En una remota isla hay una profunda selva... Y en una profunda selva hay la cárcel psiquiatrica más grande y segura del planeta. ¿Cómo podemos decir que alguien está loco si no sabemos describir que es la cordura? Delaré Cooper, el último fichaje de la institución, tendrá que enfrentarse a ese dilema y a muchos más.",
            featured: true,
        },
        {
            id: 3,
            name: "Carpe Diem",
            title: "2017/2018",
            img:
            img3,
            book: cd,
            desc:
                "Adrián Mendoza tiene un don muy especial. Puede controlar a su voluntad el curso de sus sueños y vivir lo que se le antoje mientras duerme. Qué poco imagina él que esa vida tan dispar de la rutina aburrida que crea por las noches muy pronto va a dejar de ser ficción cuando el Equipo Táctico de Inteligencia le reclute para una misión especial.",
        },
    ];
    return (

        <div className="testimonials" id="testimonials">
            <h1>{t("novel.title")}</h1>
            {(ready) ? (
                <div className="container" >
                    {data.map((d) => (
                        <div className={d.featured ? "card featured" : "card"} style={{
                            backgroundImage: `url(${d.img})`
                        }}>
                            <div className="center">
                                <p>{d.desc}</p>
                            </div>
                            <div className="bottom">
                                <h3>{d.name}</h3>
                                <h4>{d.title}</h4>
                            </div>
                            <div className="buttonContainer">
                                <a href={d.book}><span>{t("pre")}</span></a>
                                <a href="https://app.gumroad.com/victormoraisllahi"><span>{t("buy")}</span></a>
                            </div>
                        </div>
                    ))}
                </div>) : <img className={"constructions"} src={construction} alt={""}/> }

        </div>

    );
}