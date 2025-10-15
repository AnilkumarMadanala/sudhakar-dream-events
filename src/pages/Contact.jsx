import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
        We'd love to hear from you! Reach out for event bookings, partnership
        inquiries, or any questions.
      </p>

      <div className="contact-container">
        {/* Left Side: Map */}
        <div className="map-section">
          <iframe
            title="sudhakar-events-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.708506977439!2d83.31874414294835!3d17.727939732873665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434499eb3e63%3A0xfef86702906c01e!2sAndhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759982778608!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Info + Form */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Sudhakar Events</h3>
            <p>📍 Andhra University, Visakhapatnam, Andhrapradesh, India</p>
            <p>📞 +91 9010897413</p>
            <p>✉️ contact@sudhakarevents.com</p>
          </div>

          {/* <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
