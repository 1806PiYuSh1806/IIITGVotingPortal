import React, { useState } from "react";
import "./SelectedCandidateNames.css";
import IndividualCandidate from "../IndividualCandidate/IndividualCandidate";

const SelectedCandidateNames = (props) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const dummyCandidates = [
    {
      name: "MANJUSHA KAUSIK DUARAH",
      description:
        "Hi, I’m Aditya Raj, Your Candidate For President. When I’m Not Busy Being The Marketing Head For The Sports Board And E-Cell Or Plotting World Domination With The Photography Club, I’m Part Of The Media And Publicity Team For Entropy. Vote For Me, Because Who Else Can Juggle So Many Roles And Still Have Time For A Good Laugh?",
    },
    {
      name: "ADITYA RAJ",
      description:
        "I am a determined candidate with a vision to make a positive change. With my leadership experience in organizing events, I promise to bring innovation and inclusivity to our institute's student governance.",
    },
    {
      name: "RAJESH KUMAR",
      description:
        "As your candidate, I bring passion and dedication. Having led various cultural and sports events, I aim to ensure every voice is heard, and every student gets a platform to shine.",
    },
    {
      name: "PRIYA SHARMA",
      description:
        "Committed to excellence, I have been an active member of the Welfare Board and have contributed significantly to student welfare initiatives. Vote for me to continue making a difference.",
    },
  ];

  // Handle click event to show the individual candidate
  const handleKnowMoreClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  // If a candidate is selected, render the IndividualCandidate component
  if (selectedCandidate) {
    return (
      <IndividualCandidate
        candidate={selectedCandidate}
        goBack={() => setSelectedCandidate(null)} // Function to go back to the list
      />
    );
  }

  return (
    <div className="SCN-main-container">
      <h2 className="SCN-title">
        List of Candidates Contesting For {props.post}
      </h2>
      <div className="SCN-cards-grid">
        {dummyCandidates.map((candidate, index) => (
          <div key={index} className="SCN-card">
            <h3 className="SCN-candidate-name">{candidate.name}</h3>
            <p className="SCN-candidate-description">{candidate.description}</p>
            <button
              className="SCN-know-more-button"
              onClick={() => handleKnowMoreClick(candidate)}
            >
              Know More About Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCandidateNames;
