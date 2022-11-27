// Navigation INDEX.JS
import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const { currentPage, handlePageChange } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Project"
            onClick={() => handlePageChange('Project')}
            className={
              currentPage === 'Project' ? 'nav-link active' : 'nav-link'
            }
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#Home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li>
          <span>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
