import React from "react";

function Start(props) {
  return (
    <div className="main">
      <h1 className="title">Quizzical</h1>
      <h2 className="subtitle">Some description if needed</h2>
      <button onClick={props.startGame} className="start-btn btn">
        Start quiz
      </button>
    </div>
  );
}

export default Start;
