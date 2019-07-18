import React from 'react';
import './App.css';
import './index.css';
import Routes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div>
      <NavBar />
      <Routes />
      <Footer />
      </div>
    </div>
  );
}

export default App;