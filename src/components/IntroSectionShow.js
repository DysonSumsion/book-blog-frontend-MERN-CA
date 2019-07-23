import React from "react";
import './IntroSectionShow.css';

function IntroSectionShow(props) {
  console.log(props.value)

  return (
  <div className="IntroSectionShow">
    <h1>{props.headingTitle}</h1>
    <h2>{props.headingAuthor}</h2>
    <p>{props.headingReview}</p>
    <p>{props.headingPublisher}</p>
    <img src={props.bookImage}/>
  </div>
  );
}

export default IntroSectionShow;