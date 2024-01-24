import React from "react";

function DisplayComponent({ answers }) {
  return (
    <div>
      <h2>Participant Answers</h2>
      <ul>
        {Object.entries(answers).map(([question, answer]) => (
          <li key={question}>
            <strong>{question}:</strong> {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayComponent;
