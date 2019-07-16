import React from "react";
import './Nav.css';
import SearchBar from '../components/SearchBar';
import {Link} from 'react-router-dom';

function Nav() {

  return (
  <div className="navbar">
    <div className="navLeft">
      <div className="logo"></div>
      <SearchBar />
    </div>
    <div className="navRight">
      <div className="navLinks">
      <Link to="/home">Home</Link>
      <Link to="/aboutme">About</Link>
      <Link to="/sortbygenre">Genre</Link>
      <Link to="/sortbyyear">Reviews by year</Link>
      <Link to="/toppicks">Top Picks</Link>
      <Link to="/subscribe">Subscribe</Link>
      </div>
      <div className="hamburger"></div>
    </div>
  </div>
  );
}

export default Nav;