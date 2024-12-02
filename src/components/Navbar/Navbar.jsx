import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">VOTING PORTAL</div>
      <div className="nav-links">
        <a href="#features">FEATURES</a>
        <a href="#how-it-works">HOW IT WORKS?</a>
        <a href="#about-us">ABOUT US?</a>
      </div>
      <button className="nav-login">Login</button>
    </nav>
  );
};

export default Navbar;
