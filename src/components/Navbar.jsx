// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#f5f5f5",
      }}
    >
      {/* Left side: Logo + App name */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/logo.png" alt="App Logo" width="50" height="40" />
        <h2 style={{ margin: 0 }}>Women Safety App</h2>
      </div>

      {/* Right side: Navigation links */}
      <div>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
        <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
