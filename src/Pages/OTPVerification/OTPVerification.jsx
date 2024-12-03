import React from "react";
import "./OTPVerification.css";
import Navbar from "../../components/Navbar/Navbar";

const OTPVerification = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    window.location.href = "/forgot-password/password-change"; // Redirect to the OTP verification page
  };

  return (
    <div className="ov-voting-portal">
      <Navbar />
      <div className="ov-container">
        <div className="ov-box">
          <div className="ov-content">
            <p>Hi "Username"!</p>
            <form className="ov-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter OTP"
                className="ov-input"
                required
                maxLength="6"
              />
              <button type="submit" className="ov-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
