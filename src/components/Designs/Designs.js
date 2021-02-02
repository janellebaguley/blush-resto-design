
import IMG_1036 from './IMG_1036.jpg'
import IMG_1066 from './IMG_1066.jpg'
import IMG_0979 from './IMG_0979.jpg'
import IMG_1075 from './IMG_1075.jpg'
import './Designs.css'

function Designs (){
    return(
        <section >
          <h4>Designs</h4>
          <div className = 'display'>
          <img src={IMG_1036} alt='xmas tree'/>
          <img src={IMG_1066} alt='xmas tree'/>
          <img src={IMG_0979} alt='xmas tree'/>
          <img src={IMG_1075} alt='xmas tree'/>
          </div>
        </section>       
    )
  }    
export default Designs;