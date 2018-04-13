import React from "react";
import "./Wrapper.css";
import Navbar from "../Navbar";

const Wrapper = props => (
  <div>
    <Navbar />
    <div className="wrapper">{props.children}</div>;
  </div>
);

export default Wrapper;
