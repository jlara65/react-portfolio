// Navigation INDEX.JS
import React, { useEffect } from 'react';
import resume from '../../assets/resume/Lara_Resume_2.pdf';
import './Navigation.css';
import Footer from '../Footer/index';

// import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const { currentPage, handlePageChange } = props;

  useEffect(() => {
    document.title = `Lara's Portfolio | ${currentPage}`;
  }, [currentPage]);
  return (
    <nav className="side-nav">
      <div className="container-fluid text-center">
        <img
          src="https://i.imgur.com/uCUDEMv.jpg"
          alt="profile headshot"
          className="side-nav-img mb-4"
        />
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
            About Me
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
            Projects
          </a>
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact'
                ? 'custom-nav-link link-active'
                : 'custom-nav-link'
            }
          >
            Contact
          </a>

          <a
            href={resume}
            target="blank"
            rel="noreferrer"
            className={
              currentPage === 'Resume'
                ? 'custom-nav-link link-active'
                : 'custom-nav-link'
            }
          >
            Resume
          </a>
        </ul>
      </div>
      <Footer className="mt-auto side-nav-footer"></Footer>
    </nav>
  );
}

export default Navigation;
