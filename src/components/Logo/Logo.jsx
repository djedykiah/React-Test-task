import React, { Component } from 'react'; 
import './Logo.sass';
import logo from '../../logo.svg';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
    )
  }
};
