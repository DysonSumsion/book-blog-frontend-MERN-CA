import React from "react";
import './CardAdmin.css';

function CardAdmin(props) {

  return (
    <div className="card">
      <div className="cardLeft">
      </div>
      <div className="cardRight">
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default CardAdmin;