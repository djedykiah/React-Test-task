import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Requirements from './Requirements';
import Users from './Users';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header /> 
        <Hero /> 
        <About /> 
        <Requirements /> 
        <Users />
      </div>
    )
  }
}
