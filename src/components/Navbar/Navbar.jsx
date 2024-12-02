import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">VOTING PORTAL</div>
      <div className="navbar-links">
        <a href="#features">FEATURES</a>
        <a href="#how-it-works">HOW IT WORKS?</a>
        <a href="#about-us">ABOUT US?</a>
      </div>
      <button className="navbar-login">Login</button>
    </nav>
  );
};

export default Navbar;
