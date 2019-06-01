import React, { Component } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About'
import Requirements from '../Requirements/Requirements';
export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header /> 
        <Hero /> 
        <About /> 
        <Requirements />
      </div>
    )
  }
}
