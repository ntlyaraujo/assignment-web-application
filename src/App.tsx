import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/homepage'
import InformationPage from './pages/information'
import ServicePage from './pages/service'
function App() {
  return (
    <Router>
    <div>
      <Switch>
          <Route path="/information">
            <InformationPage />
          </Route>
          <Route path="/services">
            <ServicePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
