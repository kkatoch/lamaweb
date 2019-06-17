import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import history from "../history";
import Footer from "./footer/Footer";
import Landing from "./views/Landing";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Landing} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};



export default App;