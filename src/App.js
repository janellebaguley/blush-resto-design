import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import routes from './routes';
import purple from './purple.jpg'
import white from './white.jpg'
import './App.css';

function App () {
  return (
    <div className="App">
      <Header/>
      {routes}
        <footer className = 'footer-container'>
        <h6>Phone: 801-698-9383</h6>
        <h6>Email: </h6>
        <div className='social'>
        <h6>Facebook</h6>
        <h6>Instagram</h6>
        </div>
        </footer>
    </div>
  );
}
export default App;