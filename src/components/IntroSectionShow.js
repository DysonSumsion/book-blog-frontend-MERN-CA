import React from "react";
import './IntroSectionShow.css';

function IntroSectionShow(props) {
  console.log(props.value)

  return (
  <div className="IntroSectionShow">
    <div className="ShowCard">
      <div className="ShowCardLeft">
        <img src={props.bookImage}/>
      </div>
      <div className="ShowCardRight">
        <div className="ShowCardRightTop">
          <h1>{props.headingTitle}</h1>
          <h2>{props.headingAuthor}</h2>
          <p>{props.headingPublisher}</p>
          <p>{props.headingReview}</p>
        </div>
        { props.headingTopPick === true && 
              <span className="topPickDiv">
                <i className="star icon"></i><p>Top Pick</p>
              </span>
            }
        <div className="ShowCardRightBottom">
          <a href={props.headingLinkToBuy}>Buy Book</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default IntroSectionShow;
