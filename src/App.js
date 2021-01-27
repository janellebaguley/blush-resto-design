import React from 'react';
import Header from './components/Header';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
      <section>
        <footer>
        <h6>Phone: 801-698-9383</h6>
        <h6>Email: </h6>
        <h6>Facebook</h6>
        <h6>Instagram</h6>
        </footer>
      </section>
    </div>
  );
}
export default App;