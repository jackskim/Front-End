import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import Navigation from './Navigation.js';
import defaultAvatar from '../assets/default-avatar.png';

function Dashboard(props) {
  console.log(props);
  const avatarSrc = props.user.avatarUrl ? props.user.avatarUrl : defaultAvatar;

  return (
    <Container fluid>
      <Navigation />
        <Container text textAlign='center'>
          <Image src={avatarSrc} verticalAlign='middle' size='tiny' circular/>
          <Header as="h2">
            Welcome back {props.user.firstName}!
          </Header>
        </Container>
    </Container>
    
  );
}

export default Dashboard;
