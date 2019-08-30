import React, { useEffect, useState, Fragment } from "react";
import ItemCardInfo from './ItemCardInfo';
import Navigation from './Navigation';

const Card = props => {
    const [item, setItem] = useState();

    useEffect(() => {
      const id = props.match.params.id;
      (async () => {
        try {
          const response = await fetch(`https://umts-backend.herokuapp.com/api/rentItems/${id}`);
          const data = await response.json();
          setItem(data.item);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [props.match.params.id]);

    if (!item) return <p>Loading...</p>;

    return (
      <Fragment>
        <Navigation />
        <ItemCardInfo {...item} />
      </Fragment>
    )
};

export default Card;