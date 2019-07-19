import React from "react";
import './Card.css';

function CardAdmin(props) {

  return (
    <div className="card">
      <div className="cardLeft">
      </div>
      <div className="cardRight">
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <button onClick={() => props.handleEditClick(props.review)} className="edit"> Edit</button>
        <button onClick={() => props.handleDeleteClick(props.title)} className="delete"> Delete</button>
      </div>
    </div>
  );
}

export default CardAdmin;