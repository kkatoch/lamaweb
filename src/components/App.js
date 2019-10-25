import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import Header from "./header/Header";
import history from "../history";
import Footer from "./footer/Footer";
import Landing from "./views/Landing";
import Catalog from "./views/Catalog";
import Product from "./views/Product";
import ReactGA from "react-ga";
import Contact from "./views/Contact";
import TOC from "./views/static/TOC";
import FAQ from "./views/static/FAQ";
import ScrollToTop from "./ScrollToTop";
import About from "./views/static/About";

function initializeAnalytics() {
    ReactGA.initialize("UA-150865092-1");
    history.listen((location) => {
            ReactGA.set({page: location.pathname});
            ReactGA.pageview(location.pathname)
        }
    );
}

const App = () => {
    if (process.env.REACT_APP_ENVIRONMENT != null && process.env.REACT_APP_ENVIRONMENT === "PROD") {
        initializeAnalytics();
    }

    return (
        <div className="container">
            <Router history={history}>
                <ScrollToTop>
                <div>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Landing}/>
                            <Route path="/products" exact component={Catalog}/>
                            <Route path="/products/:id" exact component={Product}/>
                            <Route path="/artist/:id" exact component={Product}/>
                            <Route path="/contact" exact component={Contact}/>
                            <Route path="/toc" exact component={TOC}/>
                            <Route path="/faq" exact component={FAQ}/>
                            <Route path="/about" exact component={About}/>
                        </Switch>
                        <Footer/>
                    </div>
                </div>
                </ScrollToTop>
            </Router>
        </div>
    );
};


export default App;