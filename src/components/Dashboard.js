import React from 'react';
import { Container, Header, Image, Menu, Tab } from 'semantic-ui-react';
import Navigation from './Navigation.js';
import defaultAvatar from '../assets/default-avatar.png';

function Dashboard(props) {
  console.log(props);
  const avatarSrc = props.user.avatarUrl ? props.user.avatarUrl : defaultAvatar;

  const panes = [
    { menuItem: ( 
      <Menu.Item key='my-item-list'>
        My Item List
      </Menu.Item>
    ),
    render: () => <Tab.Pane></Tab.Pane>
    },
    { menuItem: ( 
      <Menu.Item key='my-item-list'>
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
