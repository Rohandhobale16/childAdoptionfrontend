import React, { useState } from "react";
import "../Registration/Registration.css";
import { addContactUsdata } from "../../services/ContactService";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    const response = await addContactUsdata(data);

    navigate("/");
  };

  return (
    <div className="container_background">
      <div className="registration-container">
        <div className="text-center mb-4">
          <h1 className="text-primary">Contact Us</h1>
          <p className="lead text-muted">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control form-control-lg shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-lg shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              className="form-control form-control-lg shadow-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Write your message here"
              rows="5"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
