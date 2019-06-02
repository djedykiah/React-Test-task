import React from 'react';
import { Container } from 'reactstrap'; 
import '../styles/main.sass';
import Navigation from './Navigation';
import UserInfo from './User-info';
import Logo from './Logo';

const Header = () => (
  <Container>
    <header className="header">
      <Logo />
      <Navigation />
      <UserInfo />
    </header>
  </Container>
);

export default Header;
