import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import {
  createStyles,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

interface ContainerAppProps {
  page: string;
}
const useStyles = makeStyles(() =>
  createStyles({
    main_container: {
      position: "relative",
      height: "80vh",
      marginTop: "100px",
    },
    content: {
      padding: "24px",
    },
  })
);
const ContainerApp: FunctionComponent<ContainerAppProps> = ({
  page,
  children,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} square className={classes.main_container}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6">{page}</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContainerApp;
