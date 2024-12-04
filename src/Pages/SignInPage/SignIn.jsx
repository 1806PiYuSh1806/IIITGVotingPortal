import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";

const SignIn = () => {
  return (
    <div className="sin-voting-portal">
      <Navbar />
      <div className="sin-container">
        <div className="sin-form-card">
          <h1>CREATE ACCOUNT</h1>
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Roll Number" required />
            <input type="text" placeholder="Enrolled Course" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="sin-text-card">
          <h1>
            CREATE<br />NEW<br />ACCOUNT
          </h1>
        </div>
        <div className="sin-image-card">
          <img src="/assets/ShapeTheFuture.png" alt="Shape the Future" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
