// FOOTER INDEX.JS
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
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
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mr-joseph-lara"
        target="_blank"
        rel="noreferrer"
        title="https://www.linkedin.com/in/mr-joseph-lara"
        className="p-2 mx-2 text-light"
      >
        <BsLinkedin />
      </a>
      {/* <p className="text-center mb-5">Thank you for stopping by this site!</p> */}
    </div>
  );
}

export default Footer;
