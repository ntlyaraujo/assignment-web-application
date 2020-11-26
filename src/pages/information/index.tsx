import React from "react";
import { VehicleInfo } from "../../core/types";
import {
  Backdrop,
  CircularProgress,
  createStyles,
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
  })
);

const InformationPage = (props: any) => {
  const classes = useStyles();
  const { data, isPendingInfo, errorCodeInfo } = useVehicleInfo(
    props.history.location.state.vehicle.id
  );

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
  const handleClick = (id: string) => {
    return props.history.push({
      pathname: "/information/:" + id,
    });
  };
  console.log("data AAAAAAAAAAAAAAA -----", data ? "TEM VALOR" : "NAAAAAO");
  return (
    <div>
      <Typography variant="h6" color="inherit" noWrap>
        Information about the vehicle:{" "}
        {props.history.location.state.vehicle.name}
      </Typography>
      <Backdrop className={classes.backdrop} open={isPendingInfo}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {data && !isPendingInfo ? (
        renderTable(data)
      ) : (
        <ListItemText primary="No Information available." />
      )}
      {errorCodeInfo !== 0 ? (
        <Typography variant="h6">{errorCodeInfo}: SERVER ERROR</Typography>
      ) : null}
    </div>
  );
};

export default InformationPage;
