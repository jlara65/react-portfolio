import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './contact.css';

function Contact() {
  return (
    <div className="container-fluid">
      <h2 className="pe-3 border-end text-end me-5">Contact</h2>
      <div className="container my-5 p-3 border-bottom">
        <h3 className="display-5">Ways to Reach Me</h3>
        <p>
          Thank you for stopping by my portfolio! Here are the contact
          information to get in touch with me.
        </p>
        <p>
          If you would like to reach me, send me an email at{' '}
          <a
            href="mailto:Joseph.Lara965@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Joseph.Lara965@gmail.com"
            className="custom-paragraph-link"
          >
            Joseph.Lara965@gmail.com
          </a>{' '}
          or give me call at{' '}
          <a
            href="tel:956-465-2798"
            target="_blank"
            rel="noreferrer"
            title="(956) 465-2798"
            className="custom-paragraph-link"
          >
            (956) 465-2798
          </a>
          .
        </p>
      </div>
      <div className="section-content container d-flex justify-content-center">
        <a
          href="https://github.com/jlara65"
          target="_blank"
          rel="noreferrer"
          title="https://github.com/jlara65"
          className="p-2 mx-2 text-light custom-icon"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mr-joseph-lara"
          target="_blank"
          rel="noreferrer"
          title="https://www.linkedin.com/in/mr-joseph-lara"
          className="p-2 mx-2 text-light custom-icon"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
