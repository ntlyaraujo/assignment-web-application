import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import InformationPage from "./pages/information";
import ServicePage from "./pages/service";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/information/:id">
            <InformationPage />
          </Route>
          <Route exact path="/services">
            <ServicePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
