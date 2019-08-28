import React from "react";

const Card = props => {
    return (
        <div className='card-container'>
            {/* <img src='' /> */}
            <h1>{props.name}</h1>
            <h3>{props.address}</h3>
        </div>
    )
};


export default Card;