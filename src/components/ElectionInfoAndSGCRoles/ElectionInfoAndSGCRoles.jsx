import React from "react";
import "./ElectionInfoAndSGCRoles.css"; // Create a separate CSS file for this component

const ElectionInfoAndSGCRoles = () => {
  return (
    <div className="election-content">
      <h2>About Student Gymkhana Council Election 2025</h2>
      <p>
        Welcome to the Seventh Students' Gymkhana Council (SGC) Elections at
        IIIT Guwahati! The elections will determine the new representatives
        for the positions of President, Vice-President, General Secretary -
        Technical Board, General Secretary - Cultural Board, General
        Secretary - Sports Board, and General Secretary - Welfare Board. The
        newly elected SGC members will assume their roles starting August 1,
        2024. Get involved, participate in the voting process, and help
        shape the future of our institute!
      </p>
      <h3>Eligibility Criteria</h3>
      <p>
        Before submitting your nomination, please review the eligibility
        criteria for each post as outlined in the Students' Gymkhana
        Constitution available on the Institute website. If you have any
        questions or need further clarification, contact the Student Affairs
        Office.
      </p>
      <h3>Code Of Conduct</h3>
      <p>
        The election Code of Conduct will be as per the Students' Gymkhana
        Constitution (available at:{" "}
        <a
          href="https://www.iiitg.ac.in/uploads/files/Gymkhana_Constitution.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gymkhana Constitution
        </a>
        ).
      </p>

      <h3>Timeline</h3>
      <ol className="timeline">
        <li>
          Last Date of filling nominations: 2nd April 2024 (till 5:30 pm)
        </li>
        <li>
          Last Date of withdrawal of nominations: 2nd April 2024 (till 5:30
          pm)
        </li>
        <li>
          Announcement of Eligible Candidates by Returning Officers: 3rd
          April 2024 (via emails to all students)
        </li>
        <li>
          Election will be held on 5th April 2024 from 5:00 pm onwards.
        </li>
      </ol>

      <h3>Roles Of SGC Member</h3>
      <div className="roles">
        <button className="role-button">President</button>
        <button className="role-button">Vice-President</button>
        <button className="role-button">General Secretaries</button>
      </div>
    </div>
  );
};

export default ElectionInfoAndSGCRoles;
