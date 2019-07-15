import React from "react";
import './SubheadSection.css';

function SubheadSection(props) {

  return (
  <div className="SubheadSection">
    <h2>{props.heading}</h2>
  </div>
  );
}

export default SubheadSection;