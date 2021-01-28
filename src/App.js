import Header from './components/Header/Header';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
      <section>
        <div className = 'container-box'><img/></div>
        <div className = 'container-box'><img/></div>
        <footer className = 'footer-container'>
        <h6>Phone: 801-698-9383</h6>
        <h6>Email: </h6>
        <div className='social'>
        <h6>Facebook</h6>
        <h6>Instagram</h6>
        </div>
        </footer>
      </section>
    </div>
  );
}
export default App;