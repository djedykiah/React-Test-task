import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Requirements from './Requirements';
import Users from './Users';
import Register from './Register';

const App = () => (
  <div className="wrapper">
    <Header />
    <Hero />
    <About />
    <Requirements />
    <Users />
    <Register />
  </div>
);

export default App;
