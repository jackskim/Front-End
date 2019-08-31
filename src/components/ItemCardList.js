import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import ItemCardInfo from './ItemCardInfo';
import '../index.css';

function ItemCardList(props) {
    const [itemCards, setItemCards] = useState([]);

    useEffect(() => {
        axios
            .get("https://umts-backend.herokuapp.com/api/rentItems/")
            .then(res => {
                setItemCards(res.data.rentItems);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Container textAlign="middle">
            <Header as="h1">Items for Rent</Header>
            <div className='itemcard-list grid-view'>
                {itemCards.map(itemCard => {
                    return (
                        <Link key={itemCard.id} to={`/card/${itemCard.id}`}>
                            <ItemCardInfo {...itemCard} />
                        </Link>
                    )
                })}
            </div>
        </Container>
    );
}

export default ItemCardList;
