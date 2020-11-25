import React from "react";
import ContainerApp from "../../components/ContainerApp";
import TopAppBar from "../../components/AppBar";
import { VehicleResponse } from "../../core/types";
import {
  Backdrop,
  CircularProgress,
  Container,
  createStyles,
  CssBaseline,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import useVehicle from "../../core/useVehicle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      position: "absolute",
      color: "#fff",
    },
  })
);

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => {
  return <ListItem button component="a" {...props} />;
};
const renderRow = (data: VehicleResponse) => {
  const { vehicles } = data;
  return vehicles.map((item) => (
    <ListItemLink key={item.id}>
      <ListItemText primary={item.name} />
    </ListItemLink>
  ));
};

const HomePage = () => {
  const classes = useStyles();
  const { data, isPending, errorCode } = useVehicle();
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <TopAppBar title="Volvo Group Connected Solutions" />
      <ContainerApp page="Home">
        <Typography variant="h6" color="inherit" noWrap>
          Available Vehicles
        </Typography>
        <Backdrop className={classes.backdrop} open={isPending}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <List component="nav" aria-label="secondary mailbox folders">
          {data ? (
            renderRow(data)
          ) : (
            <ListItemText primary="No vehicles available." />
          )}
        </List>
        {errorCode !== 0 ? (
          <Typography variant="h6">
          {errorCode}: SERVER ERROR
          </Typography>
        ) : null}
      </ContainerApp>
    </Container>
  );
};

export default HomePage;
