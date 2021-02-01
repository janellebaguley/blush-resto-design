import React, {Component} from 'react';
import axios from 'axios';

class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: {}
    }
  }
  getFurniture (){
    axios.get('/api/furniture')
    .then(furniture => {
      this.setState({furniture: {...this.state.furniture}})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    const {furniture} = this.state.furniture
    return(
      <section>
            <h3>Furniture</h3>
            {/* <Furniture {props.getFurniture()}/> */}
        </section>
    )
  }    
}
export default Furniture;