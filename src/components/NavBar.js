import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
//import Showpage from '../container/Showpage';
//import ShowPage from '../container/ShowPage';
import SearchBarContainer from '../container/SearchBarContainer';

class NavBar extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <>
      <div className="navbar">
        <div className="navLeft">
          <div className="logo">
          </div>
          <SearchBarContainer /> 
        </div>
        <div className="navRight">
          <div className="navLinks">
            <Link to="/home">Home</Link>
            <Link to="/aboutme">About</Link>
            <button onClick={this.showMenu}>
              Genre
            </button>
            <Link to="/sortbyyear">Reviews by year</Link>
            <Link to="/toppicks">Top Picks</Link>
            <Link to="/subscribe">Subscribe</Link>
            </div>
            <div className="hamburger">
              <i className="huge bars icon"></i>
            </div>
          </div>
      </div>
          
      <div> {
        this.state.showMenu
          ? (
            <div
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <Link to="/sortbygenre">In Translation</Link>
              <Link to="/sortbygenre">Short Stories</Link>
              <Link to="/sortbygenre">Essays</Link>
              <Link to="/sortbygenre">Narrative Non-Fiction</Link>
              <Link to="/sortbygenre">Crime</Link>
              <Link to="/sortbygenre">Graphic Novels</Link>
              <Link to="/sortbygenre">Contemporary Fiction</Link>
              <Link to="/sortbygenre">Australian Fiction</Link>
              <Link to="/sortbygenre">Memoir</Link>
              <Link to="/sortbygenre">Young Adult (YA)</Link>
            </div>
          )
          : (
            null
          )
        }
      </div>
      </>
    );
  }
}

export default NavBar;