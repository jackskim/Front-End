import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Card from './Card';


export default function ItemCardList() {
    const [itemCards, setItemCards] = useState([]);

    useEffect(() => {
        axios
            .get("https://umts-backend.herokuapp.com/api/rentItems/")
            .then(res => {
                setItemCards(res.data.results);
                console.log(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <Container className='itemcard-list'>
            <div>
                {itemCards.map(itemCard => {
                    return <Card name={itemCard.name} address={itemCard.address} />
                })}
            </div>
        </Container>
    );

}