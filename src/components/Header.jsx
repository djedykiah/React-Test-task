import React, { Component } from "react";
import Navigation from "./Navigation";
import UserInfo from "./User-info";
import Logo from "./Logo";
import { Container } from "reactstrap";

import "../styles/main.sass";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <header className="header">
          <Logo />
          <Navigation />
          <UserInfo />
        </header>
      </Container>
    );
  }
}
