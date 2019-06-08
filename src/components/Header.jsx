import React from 'react';
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import LoggedUser from './LoggedUser';
import logo from '../logo.svg';

const Header = () => (
  <Container>
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Navigation />
      <LoggedUser />
    </header>
  </Container>
);

export default Header;
