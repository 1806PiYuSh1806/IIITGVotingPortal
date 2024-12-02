import React from "react";
import { Link } from "react-router-dom";
import "./VotingPortal.css";
import Navbar from "../../components/Navbar/Navbar";

const VotingPortal = () => {
  return (
    <div className="sp-voting-portal">
      <Navbar />
      <div className="sp-voting-container">
        <div className="sp-voting-aside1">
          <img src="/assets/Group.svg" alt="" />
        </div>
        <div className="sp-voting-content">
          <blockquote>
            "Student elections are the foundation of campus democracy,
            empowering young individuals to voice their opinions and shape their
            community. By participating, students learn the value of leadership,
            responsibility, and civic engagement."
          </blockquote>
          <p>— Nelson Mandela</p>
          <button href="/signin" className="sp-join-now">
            <Link to="/signin" className="sp-link">Join Now</Link>
          </button>
        </div>
        <div className="sp-voting-aside">
          <img src="/assets/Group.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VotingPortal;
