import React from "react";
import './IntroSectionShow.css';

function IntroSectionShow(props) {
  console.log(props.value)

  return (
  <div className="IntroSectionShow">
    <div className="IntroSectionShowLeft">
      <img src={props.bookImage}/>
    </div>
    <div className="IntroSectionShowRight">
      <h1>{props.headingTitle}</h1>
      <h2>{props.headingAuthor}</h2>
      <p>{props.headingPublisher}</p>
      <p>{props.headingReview}</p>
    </div>

 
  </div>
  );
}

export default IntroSectionShow;