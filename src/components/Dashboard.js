import React from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './Navigation.js';

function Dashboard(props) {
  return (
    <Container fluid>
      <Navigation />
      <h1>Dashboard</h1>
    </Container>
    
  );
}

export default Dashboard;
