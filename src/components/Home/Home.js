import {Component} from 'react';
import whiteframe from './whiteframe.jpg'
import xmas from './xmas.jpg'
import purple from './purple.jpg'
import design from './design.jpg'
import './Home.css'

class Home extends Component {
    constructor(){
        super()
        this.state = {
        }
      }

      render(){
        
        return(
            <section>
       <div  className = 'home-page'>
        <img src={whiteframe} alt='white frame'/>
        <img src={purple} alt='purple table'/>
        </div>
        <div  className = 'home-page'>
        <img src={design} alt='wall design'/>
        <img src={xmas} alt='table with sun'/>        
        </div>       
</section>
        )
 }
}
export default Home;