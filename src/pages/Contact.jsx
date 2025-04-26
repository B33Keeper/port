import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="sample@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" placeholder="Company name" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message" rows={5}></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
        <div className="contact-socials">
          <a className="social-btn facebook" href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a className="social-btn instagram" href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a className="social-btn linkedin" href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 