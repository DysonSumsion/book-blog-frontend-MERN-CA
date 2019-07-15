import React from 'react';
import './App.css';
import './index.css';
import Routes from './Routes';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div>
      <Nav />
      <Routes />
      <Footer />
      </div>
    </div>
  );
}

export default App;
