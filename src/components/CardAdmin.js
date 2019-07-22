import React from "react";
import './CardAdmin.css';

function CardAdmin(props) {

  return (
    <div className="cardAdmin">

      <div className="cardAdminLeft">
        <div className="cardAdminLeftTop">
          <img src={props.url} alt={props.title}  ></img>
          </div>
        <div className="cardAdminLeftBottom">
          <button onClick={() => props.handleEditClick(props.review)} className="edit"> Edit</button>
          <button onClick={() => props.handleDeleteClick(props.title)} className="delete"> Delete</button>
        </div>
      </div>

      <div className="cardAdminRight">
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Review: {props.review}</p>
        <p>Publisher: {props.publisher}</p>
        <p>Year Published: {props.yearPublished}</p>
        <p>Genre: {props.genre}</p>
        <p>ISBN: {props.isbn}</p>
        <p>URL to buy: {props.url}</p>
        <p>SEO Keywords: {props.keywords}</p>
      </div>

    </div>
  );
}

export default CardAdmin;