import React, { useState } from "react";
import "./CandidateList.css";
import NominationForm from "../NominationForm/NominationForm"; // Import the NominationForm component

const CandidateList = () => {
  const [selectedPosition, setSelectedPosition] = useState(null); // State to track selected position

  const positions = [
    "President",
    "Vice - President",
    "General Secretary Technical Board",
    "General Secretary Cultural Board",
    "General Secretary Sports Board",
    "General Secretary Welfare Board",
  ];

  // Handle button click
  const handlePositionClick = (position) => {
    setSelectedPosition(position);
  };

  // If a position is selected, render the NominationForm component
  if (selectedPosition) {
    return <NominationForm post={selectedPosition} />;
  }

  // Render the nomination buttons
  return (
    <div className="CL-nomination-submission-container">
      <h2 className="CL-nomination-title">List of Candidates by Position</h2>
      <div className="CL-positions-grid">
        {positions.map((position, index) => (
          <button
            key={index}
            className="CL-position-button"
            onClick={() => handlePositionClick(position)}
          >
            {position}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
