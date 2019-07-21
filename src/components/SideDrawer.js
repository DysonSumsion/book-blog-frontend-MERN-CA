import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <button className="logo"><Link to="/home">HOME</Link></button>
      <Link to="/aboutme">About me</Link>
      <Link to="/sortbygenre">Reviews by Genre</Link>
      <Link to="/sortbyyear">Reviews by year</Link>
      <Link to="/toppicks">Top Picks</Link>
      <Link to="/subscribe">Subscribe</Link>
  </nav>
  );
};

export default sideDrawer;