import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import history from "../history";
import Footer from "./footer/Footer";
import Landing from "./views/Landing";
import Catalog from "./views/Catalog";
import Product from "./views/Product";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/discover" exact component={Catalog} />
              <Route path="/products/:id" exact component={Product} />
              <Route path="/artist/:id" exact component={Product} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};



export default App;