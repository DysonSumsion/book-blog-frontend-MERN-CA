import React from "react";
import './Nav.css';

function Nav() {

  return (
  <div className="navbar">
    <div className="logo"></div>
    <div className="navlinks">
    <p>About me</p>
    <p>Genres</p>
    <p>Reviews by year</p>
    <p>Top Picks</p>
    <p>Subscribe</p>
    </div>
  </div>
  );
}

export default Nav;