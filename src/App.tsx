import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import ContainerApp from "./components/ContainerApp";
import TopAppBar from "./components/TopAppBar";
import HomePage from "./pages/homepage";
import InformationPage from "./pages/information";
import ServicePage from "./pages/service";
const App = () => {
  let history = useHistory();

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <TopAppBar title="Volvo Group Connected Solutions" />

      <Switch>
        <Route exact path="/information/:id">
          <ContainerApp page="Info" history={history}>
            <InformationPage history={history} />
          </ContainerApp>
        </Route>
        <Route exact path="/services">
          <ServicePage />
        </Route>
        <Route exact path="/">
          <ContainerApp page="Home" history={history}>
            <HomePage history={history} />
          </ContainerApp>
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
