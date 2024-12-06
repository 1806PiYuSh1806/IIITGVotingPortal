import React, { useState } from "react";
import "./NominationSubmission.css";
import NominationForm from "../NominationForm/NominationForm"; // Import the Temp component

const NominationSubmission = () => {
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

  // If a position is selected, render the Temp component
  if (selectedPosition) {
    return <NominationForm post={selectedPosition} />;
  }

  // Render the nomination buttons
  return (
    <div className="ns-nomination-submission-container">
      <h2 className="ns-nomination-title">
        Select Your Desired Position to Contest
      </h2>
      <div className="ns-positions-grid">
        {positions.map((position, index) => (
          <button
            key={index}
            className="ns-position-button"
            onClick={() => handlePositionClick(position)}
          >
            {position}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NominationSubmission;
