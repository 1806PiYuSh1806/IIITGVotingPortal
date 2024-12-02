import React from "react";
import "./VotingPortal.css";
import Navbar from "../../components/Navbar/Navbar";

const VotingPortal = () => {
  return (
    <div className="voting-portal">
      <Navbar />
      <div className="voting-container">
        <div className="voting-aside1">
          <img src="/assets/Group.svg" alt="" />
        </div>
        <div className="voting-content">
          <blockquote>
            "Student elections are the foundation of campus democracy,
            empowering young individuals to voice their opinions and shape their
            community. By participating, students learn the value of leadership,
            responsibility, and civic engagement."
          </blockquote>
          <p>— Nelson Mandela</p>
          <button className="join-now">Join Now</button>
        </div>
        <div className="voting-aside">
          <img src="/assets/Group.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VotingPortal;
