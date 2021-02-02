import React, {Component} from 'react';
import axios from 'axios';



class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: {}
    }
  }
  componentDidMount(){
    axios.get('/api/furniture')
    .then(res => {
    this.setState({furniture: res.data})
  })
}
  getFurniture = () => {
    axios.get('/api/furniture')
    .then(furniture => {
      this.setState({furniture: {...this.state.furniture}, all: furniture.data})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    
    return(
      <div>
            <h3>Furniture</h3>
            <section>
            </section>
        </div>
    )
  }    
}
export default Furniture;