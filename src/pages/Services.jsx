import React, { useState, useEffect } from "react";
import "../styles/Services.css";

// Import images
import venue1 from "../assets/venues/annualday.webp";
import venue2 from "../assets/venues/rk-functionhall-vizag.webp";
import venue3 from "../assets/venues/daspalla-vizag.webp";
import venue4 from "../assets/venues/snr-vizag.webp";
import venue5 from "../assets/venues/karthika-vizag.webp";

import photo1 from "../assets/services/photo1.jpg";
import photo2 from "../assets/services/photo2.webp";
import photo3 from "../assets/services/photo3.jpg";

import catering1 from "../assets/services/catering1.jpg";
import catering2 from "../assets/services/catering2.jpg";
import catering3 from "../assets/services/catering3.jpg";

import lighting1 from "../assets/services/light1.jpg";
import lighting2 from "../assets/services/light2.jpg";
import lighting3 from "../assets/services/light3.jpg";

import decor1 from "../assets/services/decor1.jpg";
import decor2 from "../assets/services/decor2.jpg";
import decor3 from "../assets/services/decor3.jpg";

const Services = () => {
  const services = [
    {
      title: "Venues",
      description:
        "Elegant indoor and outdoor venues — from luxury halls to open lawns — tailored to your event theme.",
      images: [venue1, venue2, venue3, venue4, venue5],
    },
    {
      title: "Photography & Videography",
      description:
        "Capture every moment beautifully with our professional photo and video coverage.",
      images: [photo1, photo2, photo3],
    },
    {
      title: "Catering",
      description:
        "Multi-cuisine catering with a focus on taste, hygiene, and premium presentation.",
      images: [catering1, catering2, catering3],
    },
    {
      title: "Sound & Lighting",
      description:
        "Transform your event’s atmosphere with professional sound, lighting, and ambiance design.",
      images: [lighting1, lighting2, lighting3],
    },
    {
      title: "Decorations",
      description:
        "Floral, modern, or thematic — we craft decor that speaks elegance and creativity.",
      images: [decor1, decor2, decor3],
    },
  ];

  const [indexes, setIndexes] = useState(new Array(services.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((i, idx) => (i + 1) % services[idx].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-page">
      <h2 className="services-title">Our Services</h2>
      <p className="services-intro">
        From venues to photography, catering to lighting — we handle every
        detail with perfection.
      </p>

      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            style={{
              flexDirection: index % 2 === 1 ? "row-reverse" : "row",
            }}
          >
            <div className="service-image">
              <img
                src={service.images[indexes[index]]}
                alt={service.title}
                className="carousel-img"
              />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
