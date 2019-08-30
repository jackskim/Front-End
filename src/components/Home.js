import React from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './Navigation.js';
import ItemCardList from './ItemCardList';

function Home(props) {
  return (
    <Container fluid>
      <Navigation />
      < ItemCardList {...props} />
    </Container>
  );
}

export default Home;
