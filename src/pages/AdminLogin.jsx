import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

// Use environment variable for API base
const API_BASE = import.meta.env.VITE_API_URL || "https://sudhakar-events-3.onrender.com";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        alert("✅ Login successful!");
        navigate("/admin/dashboard");
      } else {
        alert(data.message || "❌ Invalid credentials");
      }
    } catch (err) {
      alert("⚠️ Server error, please try again later");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
