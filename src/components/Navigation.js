import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Input, Menu } from 'semantic-ui-react';

function Navigation({ searchInput, handleSearchInput, ignoreSearch }) {
  return (
    <Menu pointing className='fixed'>
      <Container>
        {/*<Menu.Item key='logo'>*/}
        {/*  <NavLink to="/">TSTUFF</NavLink>*/}
        {/*</Menu.Item>*/}
        <Menu.Item key='home'>
          <NavLink exact to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key='dashboard'>
          <NavLink to={`/dashboard`}>Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key='list-item'>
          <NavLink to="/rentoutitem">List Item</NavLink>
        </Menu.Item>
        <Menu.Item key='logout'>
          <NavLink to="/logout">Log Out</NavLink>
        </Menu.Item>
        {!ignoreSearch && (
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' onChange={handleSearchInput} value={searchInput} />
            </Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
}

export default Navigation;
