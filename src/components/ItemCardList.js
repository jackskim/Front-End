import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import ItemCardInfo from './ItemCardInfo';

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
        <Container className='itemcard-list'>
            <div>
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