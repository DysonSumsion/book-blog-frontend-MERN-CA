import React from 'react';
import {Link} from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton';
import SearchBarContainer from '../container/SearchBarContainer';
import './Toolbar.css';
import Jicon from '../Jicon.png';


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
      <div className="logo"><Link to="/home"><img src={Jicon}></img></Link></div>
        {/* <SearchBarContainer />  */}
      </div>
      <div className="toolbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navRightAdmin">
        <Link to="/auth/adminaddreview">Create Review</Link>
        <Link to = '/adminjaclyn' onClick={deleteToken}> Logout </Link>
      </div>
  
    </header>
    )
  } else {
    return (
      <header className="toolbar">
      
      <div className="navLeft">
        <div className="logo"><Link to="/home"><img src={Jicon}></img></Link></div>
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
        <Link className="outlineButton" to="/subscribe">Subscribe</Link>
      </div>
  
    </header>
    )
  }
};

export default toolbar;


{/* <li><a href='https://arizonaatwork.com'><img src='https://i.imgur.com/fe0T4nw.png'/></a></li>

<img className="img-responsive" src={"../../public/assets/image/img/footer-logo.jpg"} alt="logo"/> */}

