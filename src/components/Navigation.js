import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navigation(props) {
  return (
    <Menu>
      <Menu.Item key='logo'>
        <NavLink to="/">TSTUFF</NavLink>
      </Menu.Item>
      <Menu.Item key='home'>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key='dashboard'>
        <NavLink to={`/dashboard`} user={props.user}>Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key='list-item'>
        <NavLink to="/">List Item</NavLink>
      </Menu.Item> 
      <Menu.Item key='logout'>
        <NavLink to="/logout">Log Out</NavLink>
      </Menu.Item> 
    </Menu>
  );
}

export default Navigation;
