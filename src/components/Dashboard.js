import React, { useState, useEffect } from 'react';
//import axiosWithAuth from '../axiosWithAuth.js';
import axios from 'axios';
import { Container, Header, Image, Menu, Tab, List } from 'semantic-ui-react';

import Navigation from './Navigation.js';
import defaultAvatar from '../assets/default-avatar.png';

function Dashboard(props) {

  const avatarSrc = props.user.avatarUrl ? props.user.avatarUrl : defaultAvatar;

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

  const panes = [
    { menuItem: ( 
      <Menu.Item key='my-item-list'>
        My Item List
      </Menu.Item>
    ),
      render: () => {
        return (
          <Tab.Pane>
            <List style={{textAlign:"left"}}>
              {userItems.map( item => {
                return (
                  <List.Item>
                    {item.name}
                  </List.Item>
                );
              })}
            </List>
          </Tab.Pane>
        );
      }
    },
    { menuItem: ( 
      <Menu.Item key='update-item'>
        Update Item 
      </Menu.Item>
    ),
      render: () => <Tab.Pane></Tab.Pane>
    },
    { menuItem: ( 
      <Menu.Item key='update-profile'>
        Update Profile 
      </Menu.Item>
    ),
      render: () => <Tab.Pane></Tab.Pane>
    }

  ];

  return (
    <Container fluid>
      <Navigation />
        <Container text textAlign='center'>
          <Image src={avatarSrc} verticalAlign='middle' size='tiny' circular/>
          <Header as="h2">
            Welcome back {props.user.firstName}!
          </Header>
          <Tab panes={panes} /> 
        </Container>
    </Container>
    
  );
}

export default Dashboard;
