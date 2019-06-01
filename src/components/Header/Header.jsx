import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import User from "../User/User";
import Logo from "../Logo/Logo";
import { Container } from "reactstrap";

import "./Header.sass";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <header className="header">
          <Logo />
          <Navigation />
          <User />
        </header>
      </Container>
    );
  }
}
