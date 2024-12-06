import React, { useState } from "react";
import "./DeclarationForm.css";
import CadidateInfoAndManifesto from "../CadidateInfoAndManifesto/CadidateInfoAndManifesto";

const DeclarationForm = (props) => {
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox
  const [nextPage, setNextPage] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      alert("Please agree to the declaration before submitting!");
      return;
    }
    // Add your submit logic here
    // alert("Candidacy submitted successfully!");
    setNextPage(true);
  };

  if (nextPage === true) {
    return <CadidateInfoAndManifesto/>
  }

  return (
    <div className="df-main-container">
      <h2 className="df-title">Nomination Form : {props.post}</h2>
      <p className="df-declaration">
        <strong>Declaration by Candidate:</strong>
        <br />
        I hereby put forward my candidature for the above-mentioned post of the
        IIITG Students’ Gymkhana Council Election 2024. I declare that I have
        not faced any formal disciplinary action for any misconduct in my
        student life so far by any committee of Institute. In the event of
        winning the election, I shall serve my post and my Institute to the
        best of my capability. Before or during the filling of nomination if I
        am found to be guilty of any offence under Institute disciplinary
        norms, my nomination shall be cancelled.
        <br />
        If I am elected to any office of SGC and found guilty of any
        disciplinary actions of Institute, I can be removed from my office with
        no further notice.
      </p>
      <div className="df-checkbox-container">
        <input
          type="checkbox"
          id="agree"
          className="df-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agree" className="df-checkbox-label">
          I agree and confirm
        </label>
      </div>
      <button
        className="df-submit-button"
        onClick={handleSubmit}
        disabled={!isChecked} // Disable button if not checked
      >
        Submit Candidacy
      </button>
    </div>
  );
};

export default DeclarationForm;
