import React from "react";
import ContainerApp from "../../components/ContainerApp";
import TopAppBar from "../../components/AppBar";
import {
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  Typography,
} from "@material-ui/core";

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
const HomePage = () => (
  <Container maxWidth="sm">
    <CssBaseline />
    <TopAppBar title="Volvo Group Connected Solutions" />
    <ContainerApp page="Home">
      <Typography variant="h6" color="inherit" noWrap>
        Available Vehicles
      </Typography>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </ContainerApp>
  </Container>
);

export default HomePage;
