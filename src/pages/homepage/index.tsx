import React from 'react';
import Container from '@material-ui/core/Container';
import ContainerApp from '../../components/ContainerApp'
import { Typography } from '@material-ui/core';

const HomePage = () => (
 
    <Container maxWidth="sm">
      <ContainerApp page='Home'>
      <Typography variant="h6" color="inherit" noWrap>Home</Typography>
      </ContainerApp>
    </Container>
 
);

export default HomePage;