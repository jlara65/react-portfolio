// HEADER INDEX.JS
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from '../Navigation/index';
import '../Header/header.css';

function Header(props) {
  const { currentPage, handlePageChange } = props;
  return (
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
  );
}

export default Header;
