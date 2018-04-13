import React from "react";
import "./Wrapper.css";
import Navbar from "../Navbar";

const Wrapper = props => (
  <div>
    <Navbar />
    <h1 className="title"><span id="guess-result">Correct/Incorrect message goes here.</span></h1>
    <div className="wrapper">{props.children}</div>;
  </div>
);

export default Wrapper;
