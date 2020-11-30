import React from "react";
import {
  Backdrop,
  CircularProgress,
  createStyles,
  Link,
  List,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import useVehicleInfo from "../../core/useVehicleInfo";
import DataTable from "../../components/DataTable";
import ServiceList from "../../components/ServiceList";
import { ColDef } from "@material-ui/data-grid";

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
  const name = props.history.location.state.vehicle.name;
  const { data, isPendingInfo, errorCodeInfo, services } = useVehicleInfo(
    props.history.location.state.vehicle.id
  );
  const columns: ColDef[] = [
    { field: "msidn", headerName: "MSIDN", flex: 1 },
    { field: "engineStatus", headerName: "Engine Status", flex: 1 },
    { field: "fleet", headerName: "Fleet", flex: 1 },
    { field: "brand", headerName: "Brand", flex: 3 },
    {
      field: "countryOfOperation",
      headerName: "Country of Operation",
      flex: 1,
    },
    { field: "chassisNumber", headerName: "Chassis Number", flex: 1 },
    { field: "cassisSeries", headerName: "Chassis Series", flex: 1 },
  ];

  const handleClick = () => {
    return props.history.push({
      pathname: "/services/:" + props.history.location.state.vehicle.id,
      state: { name },
    });
  };
  return (
    <div>
      <Typography variant="h6" color="inherit">
        Information about the vehicle:
        <Typography variant="h6" color="primary" component={"span"}>
          {" "}
          {name}
        </Typography>
      </Typography>
      <Backdrop className={classes.backdrop} open={isPendingInfo}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {data && !isPendingInfo && errorCodeInfo === 0 ? (
        <DataTable rows={[data]} columns={columns} />
      ) : (
        <ListItemText primary="No Information available." />
      )}
      <Typography variant="h6" color="inherit" noWrap>
        All ACTIVE Services for the vehicle:
        <Typography variant="h6" color="primary" component={"span"}>
          {" "}
          {name}
        </Typography>
      </Typography>
      <List className={classes.root}>
        {services && !isPendingInfo && errorCodeInfo === 0 ? (
          <ServiceList data={services} status={"ACTIVE"} />
        ) : (
          <ListItemText primary="No Information available." />
        )}
      </List>
      {services && !isPendingInfo && errorCodeInfo === 0 ? (
        <Link onClick={handleClick}>Click here to see ALL services</Link>
      ) : null}
      {errorCodeInfo !== 0 ? (
        <Typography variant="h6">
          {errorCodeInfo}: {errorMessage(errorCodeInfo)}
        </Typography>
      ) : null}
    </div>
  );
};

export default InformationPage;
