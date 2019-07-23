import React from "react";
import './IntroSection.css';

function IntroSection(props) {
  console.log(props.value)

  return (
    // let val = data.map((item)=>{

    // })
  <div className="IntroSection">
    <h1>{props.headingOne}</h1>
    <h2>{props.headingTwo}</h2>
    <h2>{props.headingThree}</h2>
    <img src={props.headingFour} alt={"img not found"}/>
  </div>
  );
}

export default IntroSection;