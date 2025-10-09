import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about/about-img.jpg"; // ← replace with your actual image path
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* 🔹 Top About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Sudhakar Events</h2>
          <p>
            At <strong>Sudhakar Events</strong>, we specialize in creating unforgettable
            experiences for weddings, birthdays, corporate gatherings, and more.
            Our team handles everything — from décor to catering — ensuring that
            every moment of your event shines perfectly. With a passion for
            creativity and precision, we bring your vision to life with elegance
            and care.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About Sudhakar Events" />
        </div>
      </section>

      {/* 🔹 Happy Customers Section */}
      <section className="stats-section">
        <h3>Our Happy Customers</h3>
        <p>Delivering excellence through every celebration.</p>

        <div className="stats-container">
          <div className="stat-box">
            <h2>500+</h2>
            <p>Events Organized</p>
          </div>
          <div className="stat-box">
            <h2>300+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box">
            <h2>10+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

      {/* 🔹 Ratings & Reviews Section */}
      <section className="reviews-section">
        <h3>What Our Clients Say</h3>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="reviews-container">
          <div className="review-card">
            <p>
              "The decoration and food were absolutely perfect! The Sudhakar
              Events team made our wedding day unforgettable."
            </p>
            <h4>- Priya & Ramesh</h4>
          </div>

          <div className="review-card">
            <p>
              "Professional, creative, and friendly. They handled our company
              annual day with amazing coordination and style."
            </p>
            <h4>- Ravi Kumar</h4>
          </div>

          <div className="review-card">
            <p>
              "Best event planners in town! Everything was on time and beautifully arranged."
            </p>
            <h4>- Sneha</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
