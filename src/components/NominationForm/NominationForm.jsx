import React, { useState } from "react";
import "./NominationForm.css";
import NominationSubmission from "../NominationSubmission/NominationSubmission";
import DeclarationForm from "../DeclarationForm/DeclarationForm";

const NominationForm = (props) => {
  const [selectedPost, setSelectedPost] = useState("Choose Post");
  const [nominatedByEmail, setNominatedByEmail] = useState("");
  const [facultyApprovalEmail, setFacultyApprovalEmail] = useState("");
  const [step, setStep] = useState(1); // Step 1: Nominated By, Step 2: Faculty Approval
  const [message, setMessage] = useState("");
  const [nominatedByRequestSent, setNominatedByRequestSent] = useState(false); // Tracks if nominated by request is sent
  const [facultyApprovalRequestSent, setFacultyApprovalRequestSent] = useState(false); // Tracks if faculty approval request is sent
  const [back, setBack] = useState("");
  const [declare, setDeclare] = useState(false);

  const handlePostChange = (event) => {
    setSelectedPost(event.target.value);
  };

  const handleSendRequest = () => {
    if (step === 1) {
      const isValidEmail = /\S+@\S+\.\S+/.test(nominatedByEmail);
      if (!isValidEmail) {
        setMessage("Please enter a valid email address for Nominated By.");
        return;
      }

      setNominatedByRequestSent(true); // Mark request as sent for Nominated By
      setMessage(""); // Clear any previous error messages
      setStep(2); // Move to next step
    } else if (step === 2) {
      const isValidEmail = /\S+@\S+\.\S+/.test(facultyApprovalEmail);
      if (!isValidEmail) {
        setMessage("Please enter a valid email address for Faculty Approval.");
        return;
      }

      setFacultyApprovalRequestSent(true); // Mark request as sent for Faculty Approval
      setMessage(""); // Final success message
      setDeclare(true);
    }
  };

  const backToPosition = () => {
    setBack("Back");
  }

  if (declare === true) {
    return <DeclarationForm post={props.post}/>
  }

  if (back === "Back") {
    return <NominationSubmission/>
  }

  return (
    <div className="nf-nomination-form">
      <h2 className="nf-form-title">Nomination Form : {props.post}</h2>

      <div className="nf-candidate-details">
        <p>
          <strong>Name of the candidate:</strong> SAI YASHWANT GANTASALA
        </p>
        <p>
          <strong>Batch:</strong> 2022
        </p>
        <p>
          <strong>Branch:</strong> Computer Science Engineering
        </p>
        <p>
          <strong>Roll No:</strong> 2201174
        </p>
        <p>
          <strong>Email ID:</strong> yashwant.gantasala22b@iiitg.ac.in
        </p>
        <p>
          <strong>Contact Number:</strong> +91 88257 68249
        </p>
        {step === 1 && (
          <p>
            <strong>Nominated By:</strong>
            <input
              type="email"
              placeholder="Enter email"
              className="nf-input"
              value={nominatedByEmail}
              onChange={(e) => setNominatedByEmail(e.target.value)}
            />
            {nominatedByRequestSent && (
              <span className="nf-request-sent">✅ Request Sent</span>
            )}
          </p>
        )}
        {step === 2 && (
          <>
            <p>
              <strong>Nominated By:</strong> {nominatedByEmail}
              <span className="nf-request-sent">✅ Request Sent</span>
            </p>
            <p>
              <strong>Faculty Approval:</strong>
              <input
                type="email"
                placeholder="Enter email"
                className="nf-input"
                value={facultyApprovalEmail}
                onChange={(e) => setFacultyApprovalEmail(e.target.value)}
                disabled={facultyApprovalRequestSent} // Disable input if request is sent
              />
              {facultyApprovalRequestSent && (
                <span className="nf-request-sent">✅ Request Sent</span>
              )}
            </p>
          </>
        )}
      </div>

      {message && <p className="nf-message">{message}</p>}

      <button
        className="nf-submit-button"
        onClick={handleSendRequest}
        disabled={facultyApprovalRequestSent} // Disable button if final request is sent
      >
        Send Request
      </button>
    </div>
  );
};

export default NominationForm;
