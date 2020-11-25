import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
interface AppBarProps {
    title: string
  }
const TopAppBar = ({title}: AppBarProps) => (
    <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    
);

export default TopAppBar;