import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import User from '../User/User';
import Logo from '../Logo/Logo'; 

import './Header.sass';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo /> 
        <Navigation /> 
        <User />
      </header>
    )
  }
}
