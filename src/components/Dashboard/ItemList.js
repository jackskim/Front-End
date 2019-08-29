import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';

function ItemList(props) {

  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get('https://umts-backend.herokuapp.com/api/rentitems');
        const allItems = response.data.rentItems;
        setUserItems(allItems.filter( item => item.userId === 8));
        // REMEMBER TO CHANGE BACK 8 to props.user.id !!!
      } catch(error) {
        console.log(error);
      }
    })(); 
  },[]);

  console.log(userItems);

  return (
    <List style={{textAlign:"left"}}>
      {userItems.map( item => {
        return (
          <List.Item>
            {item.name}
          </List.Item>
        );
      })}
    </List>

  );

}

export default ItemList;
