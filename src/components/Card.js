import React from "react";
import './Card.css';
import {Link} from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <div className="cardLeft">
      </div>
      <div className="cardRight">
        <div className="cardRightTop">
          <p className="cardTitle">{props.review.props.children.props.title}</p>
          <p>{props.review.props.children.props.author}</p>
        </div>
        <div className="cardRightBottom">
          <Link to="/show">Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
