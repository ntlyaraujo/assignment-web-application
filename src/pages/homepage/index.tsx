import React from "react";
import { useHistory } from "react-router-dom";
import { VehicleResponse } from "../../core/types";
import {
  Backdrop,
  CircularProgress,
  createStyles,
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

const HomePage = () => {
  const history = useHistory();
  const classes = useStyles();

  const { data, isPending, errorCode } = useVehicle();
  const ListItemLink = (
    props: ListItemProps<"a", { button?: true; onClick: () => void }>
  ) => {
    return <ListItem button component="a" {...props} onClick={props.onClick} />;
  };
  const renderRow = (data: VehicleResponse) => {
    const { vehicles } = data;
    return vehicles.map((item) => (
      <ListItemLink key={item.id} onClick={() => handleClick(item.id)}>
        <ListItemText primary={item.name} />
      </ListItemLink>
    ));
  };
  const handleClick = (id: string) => {
    return history.push({
      pathname: "/information/:" + id,
    });
  };
  return (
    <div>
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
        <Typography variant="h6">{errorCode}: SERVER ERROR</Typography>
      ) : null}
    </div>
  );
};

export default HomePage;
