import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import { ArrowBack } from '@material-ui/icons';
import {
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

interface ContainerAppProps {
  page: string;
  history:any
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
  history
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} square className={classes.main_container}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          {page !== 'Home'?(<IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>history.goBack()}>
            <ArrowBack />
          </IconButton>):null}
        
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
