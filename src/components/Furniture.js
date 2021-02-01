import React, {Component} from 'react';
import axios from 'axios';

class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: {}
    }
  }
  getFurniture = () => {
    axios.get('/api/furniture')
    .then(furniture => {
      this.setState({furniture: {...this.state.furniture}})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return(
      <div>
            <h3>Furniture</h3>
            <section>
             {this.state.furniture[0]?.map((furniture, i) => (
               <div key={i}>{furniture.product_name}
               {furniture.image_url}
               </div>
             ))}
            </section>
        </div>
    )
  }    
}
export default Furniture;