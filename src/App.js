// import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import routes from './routes';
import './App.css';

function App () {
  return (
    <div className="App">
      <Header/>
      {routes}
      
        <footer className = 'footer-container'> 
        {/* <h6>Facebook</h6>
        <h6>Instagram</h6> */}
        </footer>
    </div>
  );
}
export default App;