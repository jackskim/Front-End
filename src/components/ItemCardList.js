import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Card from './Card';


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
                    return <Card {...props} name={itemCard.name} address={itemCard.address} price={itemCard.price} imageUrl={itemCard.imageUrl} />
                })}
            </div>
        </Container>
    );

}

export default ItemCardList;