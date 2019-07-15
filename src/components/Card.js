import React from "react";
import './Card.css';

function Card(props) {

  return (
    <div className="card">
      <div className="cardLeft">
      </div>
      <div className="cardRight">
        <p>Book Title</p>
        <p>Author Name</p>
        <button>See more</button>
      </div>
    </div>
  );
}

export default Card;