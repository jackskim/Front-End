import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navigation() {
  const token = localStorage.getItem('token');
  console.log(token);

  return (
      <Menu>
        <Menu.Item key='logo'>
          <NavLink to="/">TSTUFF</NavLink>
        </Menu.Item>
        <Menu.Item key='home'>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        { !token &&

          <Menu.Item key='login'>
            <NavLink to="/login">Login</NavLink>
          </Menu.Item> &&

          <Menu.Item key='signup'>
            <NavLink to="/signup">Sign Up</NavLink>
          </Menu.Item>
        }

        { token &&
          <Menu.Item key='list-your-item'>
            <NavLink to="/">List Your Item</NavLink>
          </Menu.Item> &&
          <Menu.Item key='dashboard'>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Menu.Item> &&
          <Menu.Item key='logout'>
            <NavLink to="/">Log Out</NavLink>
          </Menu.Item> 
        }
      </Menu>
  );
}

export default Navigation;
