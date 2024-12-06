import React, { useState, useRef } from "react";
import "./CadidateInfoAndManifesto.css";

const CadidateInfoAndManifesto = () => {
  const [profileText, setProfileText] = useState("");
  const [manifestoUploaded, setManifestoUploaded] = useState(false);
  const [videoUploaded, setVideoUploaded] = useState(false);

  // Refs for hidden file inputs
  const manifestoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleManifestoUpload = (event) => {
    if (event.target.files.length > 0) {
      setManifestoUploaded(true);
    }
  };

  const handleVideoUpload = (event) => {
    if (event.target.files.length > 0) {
      setVideoUploaded(true);
    }
  };

  const handleClearManifesto = () => {
    setManifestoUploaded(false);
    if (manifestoInputRef.current) manifestoInputRef.current.value = "";
  };

  const handleClearVideo = () => {
    setVideoUploaded(false);
    if (videoInputRef.current) videoInputRef.current.value = "";
  };

  const handleSubmit = () => {
    if (!profileText || !manifestoUploaded) {
      alert("Please fill out the profile description and upload the manifesto.");
      return;
    }
    alert("Profile and Manifestos submitted successfully!");
    window.location.href = "/sgcElections";
  };

  return (
    <div className="CIM-main-container">
      <h2 className="CIM-title">Candidate Profile and Statement</h2>
      <textarea
        className="CIM-textarea"
        placeholder="Please provide a brief description about yourself, highlighting your background, experiences, and any positions of responsibility you have held. This information will be shared with the institute community to help them understand your qualifications and vision."
        value={profileText}
        onChange={(e) => setProfileText(e.target.value)}
      ></textarea>

      <div className="CIM-upload-container">
        <div className="CIM-upload-box" onClick={() => manifestoInputRef.current.click()}>
          <h3>Upload Your Manifesto</h3>
          <p>
            Please upload your manifesto in PDF format. This document will be
            shared on the portal to inform the institute community about your
            plans, goals, and vision for the SGC.
          </p>
          {manifestoUploaded ? (
            <p className="CIM-success-message">
              File uploaded successfully
              <span
                className="CIM-clear-text"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearManifesto();
                }}
              >
                {" "}
                (Remove)
              </span>
            </p>
          ) : null}
          <input
            type="file"
            accept=".pdf"
            ref={manifestoInputRef}
            onChange={handleManifestoUpload}
            className="CIM-hidden-file-input"
          />
        </div>

        <div className="CIM-upload-box" onClick={() => videoInputRef.current.click()}>
          <h3>
            Upload Your Video Manifesto<span className="CIM-optional-text">*Optional Field</span>
          </h3>
          <p>
            Please upload a video manifesto. This video will be shared on the
            portal to present your plans, goals, and vision to the institute
            community.
          </p>
          {videoUploaded ? (
            <p className="CIM-success-message">
              Video uploaded successfully
              <span
                className="CIM-clear-text"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearVideo();
                }}
              >
                {" "}
                (Remove)
              </span>
            </p>
          ) : null}
          <input
            type="file"
            accept="video/*"
            ref={videoInputRef}
            onChange={handleVideoUpload}
            className="CIM-hidden-file-input"
          />
        </div>
      </div>

      <button className="CIM-submit-button" onClick={handleSubmit}>
        Submit Your Profile & Manifestos
      </button>
    </div>
  );
};

export default CadidateInfoAndManifesto;
