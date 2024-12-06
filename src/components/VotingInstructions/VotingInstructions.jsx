import React from "react";
import "./VotingInstructions.css";

const VotingInstructions = () => {
  return (
    <div className="VI-main-container">
      <h2 className="VI-title">Instruction And Rules For Election</h2>
      <ol className="VI-instructions">
        <li>
          The students must carry Institute Identity Cards which the Electoral
          Officers would use for identification.
        </li>
        <li>
          Alternatively, if a student does not have an Institute Identity Card,
          they may carry a government identity proof and mark sheet of
          admission proof issued by IIITG. A student will not be allowed to
          cast his/her vote without any such identity proof.
        </li>
        <li>
          The students must carry their mobile phones or laptops to cast their
          votes.
        </li>
      </ol>
      <div className="VI-footer">
        <p>
          Dr. Kaustuv Nag and Dr. Arjab Roy will act as Returning Officers for
          the Elections.
        </p>
        <p>
          Nominations only in prescribed form can be filled and submitted to
          Students Affairs Office by <b>5:30 pm of 2nd April 2024</b>. Any
          nominations beyond that time will be rejected.
        </p>
      </div>
    </div>
  );
};

export default VotingInstructions;
