import React, { useEffect, useState } from "react";
import "../styles/Home.css";

// Import other pages (as sections)
import About from "./About";
import Services from "./Services";
import Expertise from "./Expertise";
import Contact from "./Contact";
import Book from "./Book";

// ✅ Import your carousel images
import annualday from "../assets/carousel/annualday.webp";
import birthday from "../assets/carousel/birthday.jpg";
import marriageparty from "../assets/carousel/marriageparty.jpg";
import lighting from "../assets/carousel/lighting.jpg";
import catering from "../assets/carousel/catering.jpg";

const mediaItems = [
  { src: marriageparty },
  { src: birthday },
  { src: annualday },
  { src: lighting },
  { src: catering },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="home-page">
      {/* ✅ Hero Section (Carousel) */}
      <div className="carousel-container">
        <img
          src={currentItem.src}
          alt={`Slide ${currentIndex}`}
          className="carousel-media"
        />
        <div className="carousel-overlay">
          <h1>Welcome to Sudhakar Events</h1>
          <p>We make your moments memorable — Weddings, Birthdays, and More!</p>
        </div>
      </div>

      {/* ✅ Home Intro */}
      
      {/* ✅ Include all other pages as sections */}
      <section id="about-section">
        <About />
      </section>

      <section id="services-section">
        <Services />
      </section>

      <section id="expertise-section">
        <Expertise />
      </section>

      <section id="contact-section">
        <Contact />
      </section>

      <section id="book-section">
        <Book />
      </section>
    </div>
  );
};

export default Home;
