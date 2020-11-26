import React from "react";
import { VehicleInfo, VehicleServices } from "../../core/types";
import {
  Backdrop,
  CircularProgress,
  createStyles,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@material-ui/core";
import useVehicleInfo from "../../core/useVehicleInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      position: "absolute",
      color: "#fff",
    },
    root: {
      width: "100%",
      maxHeight: "20vh",
      backgroundColor: theme.palette.background.paper,
      overflow: "scroll",
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);
const errorMessage = (code: number) => {
  switch (code) {
    case 404:
      return "Page Not Found !";
    case 401:
      return "You are not authorized to access this information,";
  }
};

const InformationPage = (props: any) => {
  const classes = useStyles();
  const { data, isPendingInfo, errorCodeInfo, services } = useVehicleInfo(
    props.history.location.state.vehicle.id
  );
  console.log("SERVICOs:", services);
  const renderTable = (info: VehicleInfo) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">msidn</TableCell>
              <TableCell align="center">Engine Status</TableCell>
              <TableCell align="center">fleet</TableCell>
              <TableCell align="center">brand</TableCell>
              <TableCell align="center">countryOfOperation</TableCell>
              <TableCell align="center">chassisNumber</TableCell>
              <TableCell align="center">cassisSeries</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={info.msidn}>
              <TableCell component="th" scope="row">
                {info.msidn}
              </TableCell>
              <TableCell component="th" scope="row">
                {info.engineStatus}
              </TableCell>
              <TableCell component="th" scope="row">
                {info.fleet}
              </TableCell>
              <TableCell component="th" scope="row">
                {info.brand}
              </TableCell>
              <TableCell component="th" scope="row">
                {info.countryOfOperation}
              </TableCell>
              <TableCell component="th" scope="row">
                {info.chassisNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {info.cassisSeries}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const ListItemLinkService = (
    props: ListItemProps<"a", { button?: true }>
  ) => {
    return <ListItem button component="a" {...props} />;
  };
  const renderList = (data: VehicleServices) => {
    const { services } = data;
    const allActives = services.filter((item) => item.status === "ACTIVE");
    return allActives.map((item) => (
      <ListItemLinkService key={item.lastUpdate}>
        <ListItemText primary={`SERVICE NAME: ${item.serviceName}`}  secondary={`LAST UPDATE: ${item.lastUpdate}`} />
      </ListItemLinkService>
    ));
  };
  return (
    <div>
      <Typography variant="h6" color="inherit" noWrap>
        Information about the vehicle:{" "}
        {props.history.location.state.vehicle.name}
      </Typography>
      <Backdrop className={classes.backdrop} open={isPendingInfo}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {data && !isPendingInfo && errorCodeInfo === 0 ? (
        renderTable(data)
      ) : (
        <ListItemText primary="No Information available." />
      )}
      <Typography variant="h6" color="inherit" noWrap>
        All ACTIVE Services for the vehicle:{" "}
        {props.history.location.state.vehicle.name}
      </Typography>
      <List className={classes.root}>
        {services && !isPendingInfo && errorCodeInfo === 0 ? (
          renderList(services)
        ) : (
          <ListItemText primary="No Information available." />
        )}
      </List>
      {errorCodeInfo !== 0 ? (
        <Typography variant="h6">
          {errorCodeInfo}: {errorMessage(errorCodeInfo)}
        </Typography>
      ) : null}
    </div>
  );
};

export default InformationPage;
