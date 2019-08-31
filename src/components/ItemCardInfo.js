import React from 'react'
import { Card, Image } from 'semantic-ui-react';

const ItemCardInfo = (props) => {
  return (
    <Card>
      <Image src={props.imageUrl} alt={props.name} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>Location: {props.address}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Header>{props.price}</Card.Header>
        <Card.Description>Description: {props.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ItemCardInfo;

