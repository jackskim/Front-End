import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navigation() {
  return (
    <div>
      <Menu>
        <Menu.Item key='home'>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navigation;
