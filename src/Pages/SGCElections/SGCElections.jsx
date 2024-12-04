import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ElectionInfoAndSGCRoles from "../../components/ElectionInfoAndSGCRoles/ElectionInfoAndSGCRoles";
import NominationSubmission from "../../components/NominationSubmission/NominationSubmission";
import CandidateList from "../../components/CandidateList/CandidateList";
import VotingInstructions from "../../components/VotingInstructions/VotingInstructions";
import SelectYourCandidate from "../../components/SelectYourCandidate/SelectYourCandidate";
import "./SGCElections.css";

const SGCElections = () => {
  const [activeTab, setActiveTab] = useState("Election Info & SGC Roles");

  const renderContent = () => {
    switch (activeTab) {
      case "Election Info & SGC Roles":
        return <ElectionInfoAndSGCRoles />;
      case "Nomination Submission":
        return <NominationSubmission />;
      case "Candidate List":
        return <CandidateList />;
      case "Voting Instructions":
        return <VotingInstructions />;
      case "Select Your Candidate":
        return <SelectYourCandidate />;
      default:
        return <ElectionInfoAndSGCRoles />;
    }
  };

  return (
    <div className="sgce-election-info-page">
      <Navbar />
      <div className="sgce-container">
        {/* Sidebar */}
        <div className="sgce-sidebar">
          <ul>
            <li
              className={activeTab === "Election Info & SGC Roles" ? "sgce-active" : ""}
              onClick={() => setActiveTab("Election Info & SGC Roles")}
            >
              Election Info & SGC Roles
            </li>
            <li
              className={activeTab === "Nomination Submission" ? "sgce-active" : ""}
              onClick={() => setActiveTab("Nomination Submission")}
            >
              Nomination Submission
            </li>
            <li
              className={activeTab === "Candidate List" ? "sgce-active" : ""}
              onClick={() => setActiveTab("Candidate List")}
            >
              Candidate List
            </li>
            <li
              className={activeTab === "Voting Instructions" ? "sgce-active" : ""}
              onClick={() => setActiveTab("Voting Instructions")}
            >
              Voting Instructions
            </li>
            <li
              className={activeTab === "Select Your Candidate" ? "sgce-active" : ""}
              onClick={() => setActiveTab("Select Your Candidate")}
            >
              Select Your Candidate
            </li>
          </ul>
        </div>
        {/* Render the appropriate component */}
        {renderContent()}
      </div>
    </div>
  );
};

export default SGCElections;
