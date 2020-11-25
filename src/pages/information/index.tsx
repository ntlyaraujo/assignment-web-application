import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const InformationPage = () => (
  <div className='homepage'>
    <Container maxWidth="sm">
      <Box my={8}>
        <Typography variant="h4" component="h1" gutterBottom>
        Information Page
        </Typography>
      </Box>
    </Container>
  </div>
);

export default InformationPage;