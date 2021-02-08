// import {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import big_design from './big_design.jpg'
import whiteframe from './whiteframe.jpg'
import xmas from './xmas.jpg'
import purple from './purple.jpg'
import design from './design.jpg'
import './Home.css'

function Home() {
    
        return(
            <section>
              <div className = 'container'>
            <img src={big_design}
            alt='' className = 'big-photo'/>
             <Link to = '/furniture'><button className = 'btn'>Shop Now</button></Link> 
              </div>
              
             <div>
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

export default withRouter(Home);