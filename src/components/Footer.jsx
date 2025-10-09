import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 Left: Company Info */}
        <div className="footer-about">
          <h3>Sudhakar Events</h3>
          <p>
            We turn your special moments into timeless memories. From weddings
            to corporate events — we handle it all with perfection and passion.
          </p>
        </div>

        {/* 🔹 Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about-section">About Us</a></li>
            <li><a href="#services-section">Services</a></li>
            <li><a href="#expertise-section">Expertise</a></li>
            <li><a href="#contact-section">Contact</a></li>
            <li><a href="#book-section">Book Now</a></li>
          </ul>
        </div>

        {/* 🔹 Right: Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> Visakhapatnam, Andhra Pradesh</p>
          <p><FaPhoneAlt /> +91 90108 97413</p>
          <p><FaEnvelope /> info@sudhakarevents.com</p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sudhakar Events | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
