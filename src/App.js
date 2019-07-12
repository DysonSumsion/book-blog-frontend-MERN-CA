import React from 'react';
import './App.css';
import Homepage from './container/Homepage';
import Showpage from './container/Showpage';
import Routes from './Routes';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="container">
      <div>
      <Nav />
      <Routes />
      </div>
    </div>
  );
}

export default App;
