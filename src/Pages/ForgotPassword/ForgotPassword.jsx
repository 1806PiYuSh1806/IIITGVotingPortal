import React from "react";
import "./ForgotPassword.css";
import Navbar from "../../components/Navbar/Navbar";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    window.location.href = "/forgot-password/otp-verification"; // Redirect to the OTP verification page
  };

  return (
    <div className="fp-voting-portal">
      <Navbar />
      <div className="fp-container">
        <div className="fp-box">
          <div className="fp-content">
            <p>Forgot Password? No Worries</p>
            <form className="fp-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email ID"
                className="fp-input"
                required
              />
              <button type="submit" className="fp-submit">
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
