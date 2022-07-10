import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Debath from "./components/contents/debath/Debath";
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";
import Project from "./components/contents/project/Project";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Cv from "./components/contents/cv/Cv";
import Research from "./components/contents/research/Research";


const Home = () => {
    return (<div className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
    </div>)
}

function App() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section>
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route exact path="/debath" render={() => <Debath/>}/>
                        <Route exact path="/cv" render={() => <Cv/>}/>
                        <Route exact path="/project/:id" render={(props) => <Project id={props.match.params.id}/>}/>
                        <Route exact path="/research/:id" render={(props) => <Research id={props.match.params.id}/>}/>

                    </Switch>
                </BrowserRouter>


            </div>
        </section>
    );
}

export default App;
