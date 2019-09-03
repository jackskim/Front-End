import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './Navigation.js';
import ItemCardList from './ItemCardList';

function Home(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => setSearchInput(e.target.value);

  return (
    <Container fluid>
      <Navigation searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <ItemCardList searchInput={searchInput} />

    </Container>
  );
}

export default Home;