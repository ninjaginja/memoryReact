import React from "react";
import "../styles/Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron">
    <h1>Test Your Memory</h1>
    <div id="score-box">
      <span>
        Score: <span id="current-score"></span> | Top Score: <span id="topscore"></span>
      </span>
    </div>
    <p id="guess-message">
      <span>Message for correct or incorrect guess goes here.</span>
    </p>
  </div>
);

export default Jumbotron;
