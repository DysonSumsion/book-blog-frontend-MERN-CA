import React from "react";
import './Card.css';

function CardAdmin(props) {

  return (
    <div className="card">
      <div className="cardLeft">
      {/* <img src="${movie.Poster}" onerror="this.src='../images/NO_PHOTO_PROVIDED.jpg';"  srcset=""> */}
  
        <img src={props.url} alt={props.title}  ></img>
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