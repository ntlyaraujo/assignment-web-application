import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContainerApp from "./components/ContainerApp";
import TopAppBar from "./components/TopAppBar";
import HomePage from "./pages/homepage";
import InformationPage from "./pages/information";
import ServicePage from "./pages/service";
const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <CssBaseline />
        <TopAppBar title="Volvo Group Connected Solutions" />

        <Switch>
          <Route exact path="/information/:id">
            <ContainerApp page="Info">
              <InformationPage />
            </ContainerApp>
          </Route>
          <Route exact path="/services">
            <ServicePage />
          </Route>
          <Route exact path="/">
            <ContainerApp page="Home">
              <HomePage />
            </ContainerApp>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
