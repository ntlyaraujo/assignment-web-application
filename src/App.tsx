import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/homepage'
import InformationPage from './pages/information'
import ServicePage from './pages/service'
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/information">Information Page</Link>
          </li>
          <li>
            <Link to="/services">Services Page</Link>
          </li>
        </ul>
      </nav>
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
