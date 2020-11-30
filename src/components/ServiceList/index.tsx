import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { VehicleServices, Service } from "../../core/types";
import { List } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);
interface CustomListItemProps {
  primary: string;
  secondary: string;
}

const CustomListItem = ({ primary, secondary }: CustomListItemProps) => {
  return (
    <ListItem button>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
};
interface ServicesListProps {
  data: VehicleServices;
  status: string;
}

const ServicesList = ({ data, status }: ServicesListProps) => {
  const classes = useStyles();
  let services: Service[] = [];
  if (status === "ACTIVE") {
    services = data.services.filter((item) => item.status === "ACTIVE");
  } else {
    services = data.services;
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {services.map((item) => (
          <CustomListItem
            primary={`SERVICE NAME: ${item.serviceName}`}
            secondary={`LAST UPDATE: ${new Date(item.lastUpdate)}`}
          ></CustomListItem>
        ))}
      </List>
    </div>
  );
};
export default ServicesList;
