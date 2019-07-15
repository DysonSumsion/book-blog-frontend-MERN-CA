import React from "react";
import './CardDisplay.css';
import Card from '../components/Card';

function CardDisplay() {

  return (
    <div className="cardDisplay">
      <div className="cardContainer">
        <Card />
      </div>
      <div className="cardContainer">
        <Card />
      </div>
      <div className="cardContainer">
        <Card />
      </div>
      <div className="cardContainer">
        <Card />
      </div>
      <div className="cardContainer">
        <Card />
      </div>
      <div className="cardContainer">
        <Card />
      </div>
      <div className="cardContainer">
        <Card />
      </div>
    </div>
  );
}

export default CardDisplay;