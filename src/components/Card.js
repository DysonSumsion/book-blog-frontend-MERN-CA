import React from "react";
import './Card.css';
import {Link} from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <div className="cardLeft">
      </div>
      <div className="cardRight">
      <p className="cardTitle">{props.review.props.children.props.title}</p>
        <p>{props.review.props.children.props.author}</p>
        <Link to="/show">Read more</Link>
      </div>
    </div>
  );
}

export default Card;


// function Card(props) {
//   return (
//     <div className="card">
//       <div className="cardLeft">
//       </div>
//       <div className="cardRight">
//       <p className="cardTitle">{props.review.props.children.props.title}</p>
//         <p>{props.review.props.children.props.author}</p>
//         <Link to="/show">Read more</Link>
//       </div>
//     </div>
//   );
