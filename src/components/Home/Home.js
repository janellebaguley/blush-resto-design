import {Component} from 'react';
import {Link} from 'react-router-dom'
import whiteframe from './whiteframe.jpg'
import xmas from './xmas.jpg'
import purple from './purple.jpg'
import design from './design.jpg'
import './Home.css'
import axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state = {
        }
      }
      render(){
        return(
            <section>
       <div  >
        <Link to = '/furniture' className = 'home-page'><img src={whiteframe} alt='white frame'/>
        
        <img src={purple} alt='purple table'/>
        </Link>
        </div>
        <div  >
        <Link to = '/designs' className = 'home-page'><img src={design} alt='wall design'/>
        <img src={xmas} alt='table with sun'/>    </Link>    
        </div>       
</section>
        )
 }
}
export default Home;