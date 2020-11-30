import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/logo.svg";
import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: 70,
      height: 70,
      backgroundColor: "#fff",
    },
  })
);

interface AppBarProps {
  title: string;
}
const TopAppBar = ({ title }: AppBarProps) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="default">
      <Toolbar>
        <Box component="span" m={1}>
          <img className={classes.logo} src={logo} alt="Volvo Group Logo" />
        </Box>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
