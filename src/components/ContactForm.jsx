import PropTypes from "prop-types";

import React, { useRef } from "react";
import { Contact } from "../models/contact.class";

const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConnected = Math.random() > 0.5;
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      isConnected
    );

    add(newContact);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Input the name of the contact"
          required
          autoFocus
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Input the last name of the contact"
          required
          autoFocus
          ref={lastNameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Input the email of the contact"
          required
          autoFocus
          ref={emailRef}
        />
      </div>
      <div>
        <button type="submit">SAVE</button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
