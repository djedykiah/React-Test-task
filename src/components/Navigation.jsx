import React from 'react';

const navItems = [
  'About me',
  'Relationships',
  'Requirements',
  'Users',
  'Sign Up',
];

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation_list">
      {navItems.map(navItem => <li key={navItem} className="navigation_item">{ navItem }</li>)}
    </ul>
  </nav>
);

export default Navigation;
