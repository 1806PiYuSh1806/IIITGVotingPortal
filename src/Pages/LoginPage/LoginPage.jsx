import React, { useState } from "react";
import "./LoginPage.css"; // Include the CSS file for styling
import Navbar from "../../components/Navbar/Navbar";

const LoginPage = () => {
  const [isStudentLogin, setIsStudentLogin] = useState(true);

  const handleStudentLogin = () => setIsStudentLogin(true);
  const handleOrganizationLogin = () => setIsStudentLogin(false);

  return (
    <div className="login-voting-portal">
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <div className="login-content">
            <h2>Hi, Nice To See You!</h2>
            <p>
              Don’t have an account yet? <a href="/signin">Sign In</a>
            </p>
            <div className="login-buttons">
              <button
                className={`login-button ${isStudentLogin ? "active" : ""}`}
                onClick={handleStudentLogin}
              >
                Login As Student
              </button>
              <button
                className={`login-button ${!isStudentLogin ? "active" : ""}`}
                onClick={handleOrganizationLogin}
              >
                Login As Organization
              </button>
            </div>
            <form className="login-form">
              <input
                type="email"
                placeholder={isStudentLogin ? "Email ID" : "Organization Email"}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
              <button type="submit" className="login-submit">
                Login
              </button>
            </form>
            <a href="/forgot-password" className="login-forgot-password">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
