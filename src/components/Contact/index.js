import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './contact.css';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };
  // console.log(formState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };
  return (
    <div className="container-fluid mx-auto col-10 col-sm-6 col-md-4 col-lg-8">
      <h2 className="pe-3 border-end text-end me-5">Contact Me</h2>
      <div className="container my-5 p-3 border-bottom">
        <Form className="" id="contact-form" onSubmit={handleSubmit}>
          {/* name input */}
          <Form.Group className="mb-3 text-start">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </Form.Group>
          {/* email input */}
          <Form.Group className="mb-3 text-start">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </Form.Group>
          {/* message text area */}
          <Form.Group className="mb-3 text-start">
            <Form.Label htmlFor="message">Message:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows="5"
              placeholder="Question? Comments? Suggestions?"
              defaultValue={message}
              onBlur={handleChange}
            />
          </Form.Group>
          {errorMessage && (
            <Form.Group className="mb-3">
              <p className="error-text">{errorMessage}</p>
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Button type="submit" variant="success">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="section-content container d-flex justify-content-center"></div>
    </div>
  );
}

export default Contact;
