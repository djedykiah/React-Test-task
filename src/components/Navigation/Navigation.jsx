import React, { Component } from 'react';
import './Navigation.sass';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="navigation_list">
          <li className="navigation_item">About me</li>
          <li className="navigation_item">Relationships</li>
          <li className="navigation_item">Requirements</li>
          <li className="navigation_item">Users</li>
          <li className="navigation_item">Sign Up</li>
        </ul>
      </nav>
    )
  }
}
