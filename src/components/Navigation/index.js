// Navigation INDEX.JS
import React, { useEffect } from 'react';
import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Footer from '../Footer/index';

// import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const { currentPage, handlePageChange } = props;

  useEffect(() => {
    document.title = `Lara's Portfolio | ${currentPage}`;
  }, [currentPage]);
  return (
    <Nav className="side-nav">
      <div className="container-fluid text-center">
        <img />
        <h2 className="nav-title text-center pb-log-3 pb-0">Joseph Lara</h2>
        <ul className="d-flex flex-lg-column flex-row justify-content-center flex-wrap text-center px-0 pt-lg-3 pt-0">
          <a
            href="#Home"
            onClick={() => handlePageChange('Home')}
            className={
              currentPage === 'Home'
                ? 'custom-nav-link link-active'
                : 'custom-nav-link'
            }
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={
              currentPage === 'About'
                ? 'custom-nav-link link-active'
                : 'custom-nav-link'
            }
          >
            About
          </a>

          <a
            href="#Project"
            onClick={() => handlePageChange('Project')}
            className={
              currentPage === 'Project'
                ? 'custom-nav-link link-active'
                : 'custom-nav-link'
            }
          >
            Project
          </a>

          <span>Resume</span>
        </ul>
      </div>
      <Footer />
    </Nav>
  );
}

export default Navigation;
