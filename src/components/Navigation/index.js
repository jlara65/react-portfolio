// Navigation INDEX.JS
import React from 'react';
import { link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  const location = useLocation();
  return (
    <Nav>
      <link to="/about" className={location.pathname === '/about'}>
        About me
      </link>
      <link to="/project" className={location.pathname === '/project'}>
        Project
      </link>
      <link to="/contact" className={location.pathname === '/contact'}>
        About me
      </link>
    </Nav>
  );
}

export default Navigation;
