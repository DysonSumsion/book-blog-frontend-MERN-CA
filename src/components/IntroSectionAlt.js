import React from "react";
import './IntroSectionAlt.css';

function IntroSectionAlt(props) {

  return (
  <div className="IntroSectionAlt">
    <h1>{props.headingOne}</h1>
    <h2>{props.headingTwo}</h2>
  </div>
  );
}

export default IntroSectionAlt;