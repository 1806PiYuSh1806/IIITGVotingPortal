import React from "react";
import "./ChangePassword.css";
import Navbar from "../../components/Navbar/Navbar";

const ChangePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    window.location.href = "/login"; // Redirect to the OTP verification page
  };

  return (
    <div className="cp-voting-portal">
      <Navbar />
      <div className="cp-container">
        <div className="cp-box">
          <div className="cp-content">
            <p>Hi "Username"!</p>
            <form className="cp-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter New Password"
                className="cp-input"
                required
              />
              <input
                type="text"
                placeholder="Re-Enter New Password"
                className="cp-input"
                required
              />
              <button type="submit" className="cp-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
