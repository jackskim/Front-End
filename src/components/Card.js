import React, { useEffect, useState } from "react";

const Card = props => {

    const [item, setItem] = useState();
    const id = props.match.params.id;
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch(`https://umts-backend.herokuapp.com/api/rentItems/${id}`);
          const data = await response.json();
          setItem(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
  
    if (!item) return <p>Loading...</p>;
  
    return (
      <Link to={{
        pathname: "/cards/${id}",
        state: {
          item: item
        }
      }}>
        <div className='card-container' >
        <img src={props.imageUrl} />
        <h1>{props.name}</h1>
        <h3>{props.address}</h3>
        <h3>{props.price}</h3>
        </div>
      </Link>
    )
};


export default Card;