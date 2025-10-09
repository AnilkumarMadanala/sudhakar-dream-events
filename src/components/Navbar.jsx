import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Sudhakar Events</h2>
      </div>

      <div className="navbar-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/expertise">Our Expertise</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/book">Book Now</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <a href="tel:+919010897413" className="call-button">Call Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
