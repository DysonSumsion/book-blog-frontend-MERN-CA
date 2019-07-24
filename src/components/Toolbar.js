import React from 'react';
import {Link} from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton';
import SearchBarContainer from '../container/SearchBarContainer';
import './Toolbar.css';


const deleteToken= (e) => {
  // e.preventDefault();
  window.localStorage.removeItem("token");
  
}


const toolbar = props => {
  const url = window.location.href
  const urlArray = url.split('/')
  const auth = urlArray.includes("auth")
  if (auth) {
    return (
      <header className="toolbar">
      
      <div className="navLeft">
        <button className="logo"><Link to="/home">HOME</Link></button>
        {/* <SearchBarContainer />  */}
      </div>
      <div className="toolbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navRight">
        <Link to="/auth/adminaddreview">Create Review</Link>
        <Link to = '/adminjaclyn' onClick={deleteToken}> Logout </Link>
      </div>
  
    </header>
    )
  } else {
    return (
      <header className="toolbar">
      
      <div className="navLeft">
        <button className="logo"><Link to="/home">HOME</Link></button>
        <SearchBarContainer /> 
      </div>
      <div className="toolbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navRight">
        <Link to="/toppicks">Top Picks</Link>
        <Link to="/sortbygenre">Reviews by Genre</Link>
        <Link to="/sortbyyear">Reviews by year</Link>
        <Link to="/aboutme">About me</Link>
        <Link to="/subscribe">Subscribe</Link>
      </div>
  
    </header>
    )
  }
};

export default toolbar;
