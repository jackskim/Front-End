import React from "react";
import Container from "semantic-ui-react";

const Card = props => {
    <Container className='card-container'>
        <img src='' />
        <h1>{props.name}</h1>
        <h3>{props.address}</h3>
    </Container>
};


export default Card;