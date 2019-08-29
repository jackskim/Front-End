import React /* { useState, useEffect } */ from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Header, Image, Menu, Tab } from 'semantic-ui-react';

import Navigation from '.././Navigation.js';
import DashboardRouter from './DashboardRouter.js';
import defaultAvatar from '../../assets/default-avatar.png';

function Dashboard(props) {
  console.log('Dashboard.js, Dashboard: ', props);

  const avatarSrc = props.user.avatarUrl ? props.user.avatarUrl : defaultAvatar;

  const panes = [
    { menuItem: ( 
      <Menu.Item key='my-item-list'>
        <NavLink to="/dashboard/itemlist">
          My Item List
        </NavLink>
      </Menu.Item>
    ),
      render: () => {
        return (
          <Tab.Pane>
            <DashboardRouter {...props} user={props.user} />
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
