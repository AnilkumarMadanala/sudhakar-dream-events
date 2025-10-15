import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

const API_BASE = import.meta.env.VITE_API_URL || "https://sudhakar-events-3.onrender.com";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [hasNewBooking, setHasNewBooking] = useState(false);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE}/api/admin/bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        console.error("Failed to fetch bookings");
        return;
      }

      const data = await res.json();

      // Show alert only when a new booking is added
      if (data.length > bookings.length) {
        setHasNewBooking(true);
        setTimeout(() => setHasNewBooking(false), 4000);
      }

      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
    const interval = setInterval(fetchBookings, 5000); // refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {hasNewBooking && <div className="alert">🔔 New booking received!</div>}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Event Type</th>
            <th>Date</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td>{b.fullName}</td>
              <td>{b.email}</td>
              <td>{b.phone}</td>
              <td>{b.eventType}</td>
              <td>{new Date(b.date).toLocaleDateString()}</td>
              <td>{b.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
