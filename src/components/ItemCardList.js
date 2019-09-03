import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import ItemCardInfo from './ItemCardInfo';
import '../index.css';

const getVisibleItems = (items, filter) => {
  return filter
    ? items.filter(
      item => item.name.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter)
    ) : items;
};

function ItemCardList({ searchInput }) {
  let [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    axios
      .get('https://umts-backend.herokuapp.com/api/rentItems/')
      .then(res => {
        setItemCards(res.data.rentItems);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid>
      <Header as="h1" textAlign="center" style={{ margin: '75px auto 20px' }}> Items for Rent</Header>
      <div className='itemcard-list grid-view'>
        {getVisibleItems(itemCards, searchInput).map(itemCard => {
          return (
            <Link key={itemCard.id} to={`/card/${itemCard.id}`}>
              <ItemCardInfo {...itemCard} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default ItemCardList;
