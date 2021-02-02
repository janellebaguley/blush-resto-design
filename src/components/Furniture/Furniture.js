import React, {Component} from 'react';
import axios from 'axios';
import white_frame from './white_frame.jpg'
import './Furniture.css';

class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: [],
      cart: []
    }
    this.getFurniture = this.getFurniture.bind(this)
    this.addToCart = this.addToCart.bind(this);
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
      this.setState({furniture: {...this.state.furniture}})
    })
    .catch(err => console.log(err))
  }
  addToCart = (cart) => {
    axios.post('/api/cart', {furniture: cart})
    .then(furniture => {
      this.setState({cart: furniture.data})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    console.log(this.state.furniture)
    return(
      <div>
            <h3>Furniture</h3>
            {this.state.furniture?.map(furniture => (
             <div key='{furniture.product_id}' className='container-box'> 
             <img src={white_frame}/>
             
             <section className='container-box'><h4>{furniture.product_name}</h4></section>
             <section className='container-box'><h4>{furniture.product_price}</h4></section>
             <section className='container-box'><button onClick ={() => this.addToCart()}>Add</button></section>
             </div>
            )) }
            
        </div>
    )
  }    
}
export default Furniture;