import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import { ArrowBack } from "@material-ui/icons";
import {
  Container,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";

interface ContainerAppProps {
  page: string;
  history: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootContent: {
      marginTop: theme.spacing(15),
      width:'100%'
    },
    container: {
      position: "relative",
      height: "80vh",
    },
    content: {
      padding:theme.spacing(4)
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
    <Container component="main" className={classes.rootContent}>
      <Paper elevation={3} square className={classes.container}>
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
    </Container>
  );
};

export default ContainerApp;
