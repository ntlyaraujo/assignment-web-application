import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import { ArrowBack } from "@material-ui/icons";
import {
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

interface ContainerAppProps {
  page: string;
  history: any;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
    },
    main_container: {
      position: "relative",
      height: "80vh",
      marginTop: "100px",
    },
    content: {
      padding: 50,
    },
  })
);
const ContainerApp: FunctionComponent<ContainerAppProps> = ({
  page,
  children,
  history,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Paper elevation={3} square className={classes.main_container}>
          <AppBar position="static" color="inherit">
            <Toolbar>
              {page !== "Home" ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => history.goBack()}
                >
                  <ArrowBack />
                </IconButton>
              ) : null}

              <Typography variant="h6">{page}</Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={5} className={classes.content}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default ContainerApp;
