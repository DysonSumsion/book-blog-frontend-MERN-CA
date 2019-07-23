import React from "react";
import './IntroSectionFlexi.css';

function IntroSectionFlexi(props) {
  // console.log(props.value)

  return (

  <div className="IntroSectionFlexi">
    <h1>{props.headingOne}</h1>
    <h2>{props.headingTwo}</h2>
    <p>{props.headingThree}</p>
  </div>
  );
}

export default IntroSectionFlexi;