import React, { useState } from "react";
import axios from "axios";
import "../styles/Book.css";

const API_BASE = import.meta.env.VITE_API_URL || "https://sudhakar-events-3.onrender.com";

const Book = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    venue: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Use backticks for template literal
      await axios.post(`${API_BASE}/api/bookings`, formData);
      alert("✅ Booking submitted successfully!");
      // Reset form after submission
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        eventType: "",
        date: "",
        venue: "",
        details: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      alert("❌ Error submitting booking. Please try again.");
    }
  };

  return (
    <section className="book-page">
      <h2 className="book-title">Book Your Event</h2>
      <p className="book-intro">
        Ready to make your celebration extraordinary? Fill out the form below to book our event services.
      </p>

      <div className="book-container">
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding / Reception</option>
              <option value="birthday">Birthday Party</option>
              <option value="babyshower">Baby Shower</option>
              <option value="corporate">Corporate Event</option>
              <option value="annual">Annual Day</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              name="venue"
              type="text"
              placeholder="Preferred Venue / City"
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="details"
            placeholder="Additional Details or Requirements"
            rows="5"
            value={formData.details}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="book-btn">Submit Booking</button>
        </form>
      </div>
    </section>
  );
};

export default Book;
