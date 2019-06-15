import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import history from "../history";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div className="pusher">
      <Router history={history}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={null} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
};


export default App;