import React from "react";
import "./Dashboard.css"; // Add a CSS file for styling if necessary
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="db-voting-portal">
      <Navbar />
      <div className="db-dashboard-container">
        <div className="db-card-content">
          <h2>SGC ELECTIONS 2025</h2>
          <p>
            Participate in the Student Gymkhana Council Election 2025! Submit
            your nomination, check the candidate list, view election rules, and
            get all the information you need to cast your vote and make your
            voice heard.
          </p>
          <a href="/sgcElections" className="db-cta-button">
            <span>&#8594;</span> {/* Arrow symbol */}
          </a>
        </div>
        <div className="db-card-image">
          <img src="/assets/dashboard.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
