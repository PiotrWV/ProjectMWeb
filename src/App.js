import React from 'react';
import styles from './App.css';
//import {GoogleMap} from 'react-google-maps';
//import Button from './Button.js';

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="firstPageTitle">
          <h1 className="titleMainPage">Welcome to Lorem!</h1>
        </div>
        <button>
          <a href="#">START NEW TRIP</a>
        </button>
        <div className="profileSum">Lorem</div>
        <div className="basicMap">
        </div>
      </main>
    </div>
  );
}

export default App;
