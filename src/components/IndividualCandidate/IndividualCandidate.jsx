import React from "react";
import "./IndividualCandidate.css";

const IndividualCandidate = ({ candidate, goBack }) => {
  return (
    <div className="IC-main-container">
      <button className="IC-go-back-button" onClick={goBack}>
        &larr; Go Back
      </button>
      <h2 className="IC-title">{candidate.name}</h2>
      <p className="IC-description">{candidate.description}</p>
      <div className="IC-actions">
        <button className="IC-action-button">
          {candidate.name.split(" ")[0]}'s Manifesto
        </button>
        <button className="IC-action-button">
          {candidate.name.split(" ")[0]}'s Video Manifesto
        </button>
      </div>
    </div>
  );
};

export default IndividualCandidate;
