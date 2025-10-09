import React from "react";
import "../styles/Book.css";

const Book = () => {
  return (
    <section className="book-page">
      <h2 className="book-title">Book Your Event</h2>
      <p className="book-intro">
        Ready to make your celebration extraordinary? Fill out the form below to book our event services.  
        Our team will get in touch with you shortly!
      </p>

      <div className="book-container">
        <form className="book-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" required />
            <select required>
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
            <input type="date" required />
            <input type="text" placeholder="Preferred Venue / City" required />
          </div>

          <textarea placeholder="Additional Details or Requirements" rows="5"></textarea>

          <button type="submit" className="book-btn">Submit Booking</button>
        </form>
      </div>
    </section>
  );
};

export default Book;
