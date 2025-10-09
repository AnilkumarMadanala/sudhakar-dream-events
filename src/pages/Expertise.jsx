import React, { useEffect } from "react";
import "../styles/Expertise.css";

import marriageImg from "../assets/expertise/marriage.jpeg";
import birthdayImg from "../assets/expertise/birthdayexperise.jpg";
import babyshowerImg from "../assets/expertise/babyshower.jpeg";
import annualdayImg from "../assets/expertise/annualday.jpg";
import specialEventImg from "../assets/expertise/specialevent.jpg";
import conferenceImg from "../assets/expertise/conference.jpg";
import teamOutingImg from "../assets/expertise/teamouting.jpg";
import transportImg from "../assets/expertise/transportation.webp";

const Expertise = () => {
  const expertiseData = [
    { title: "Weddings & Receptions", img: marriageImg },
    { title: "Birthday Parties", img: birthdayImg },
    { title: "Baby Showers", img: babyshowerImg },
    { title: "Annual Day Events", img: annualdayImg },
    { title: "Cultural & Special Events", img: specialEventImg },
    { title: "Conferences & Seminars", img: conferenceImg },
    { title: "Team Outings", img: teamOutingImg },
    { title: "Transportation Management", img: transportImg },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".expertise-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="expertise-section">
      <h2 className="expertise-title">Our Expertise</h2>
      <p className="expertise-subtitle">
        Every event deserves unique attention — explore our specialized event
        management areas.
      </p>

      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <div className="expertise-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
