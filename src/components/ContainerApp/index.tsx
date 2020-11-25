import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import './style.css'
interface ContainerAppProps {
  page: string;
}
const ContainerApp: FunctionComponent<ContainerAppProps> = ({
  page,
  children,
}) => (
  <Paper elevation={3} square className='main_container'>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6">{page}</Typography>
      </Toolbar>
    </AppBar>
    <Grid container spacing={3} className='content'>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
  </Paper>
);

export default ContainerApp;
