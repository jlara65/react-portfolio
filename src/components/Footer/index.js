// FOOTER INDEX.JS
import React from 'react';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './footer.css';

function Footer() {
  return (
    <div className="social">
      <a
        href="https://github.com/jlara65"
        target="_blank"
        rel="noreferrer"
        title="https://github.com/jlara65"
        className="p-2 mx-2 text-light"
      >
        <IconContext.Provider value={{ className: 'custom-icon', size: 40 }}>
          <BsGithub />
        </IconContext.Provider>
      </a>
      <a
        href="https://www.linkedin.com/in/mr-joseph-lara"
        target="_blank"
        rel="noreferrer"
        title="https://www.linkedin.com/in/mr-joseph-lara"
        className="p-2 mx-2 text-light"
      >
        <IconContext.Provider value={{ className: 'custom-icon', size: 40 }}>
          <BsLinkedin />
        </IconContext.Provider>
      </a>
      <a
        href="https://stackoverflow.com/users/19400958/joseph"
        target="_blank"
        rel="noreferrer"
        title="https://stackoverflow.com/users/19400958/joseph"
        className="p-2 mx-2 text-light"
      >
        {' '}
        <IconContext.Provider value={{ className: 'custom-icon', size: 40 }}>
          <BsStackOverflow />
        </IconContext.Provider>
      </a>
    </div>
  );
}

export default Footer;
