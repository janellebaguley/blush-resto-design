import React, {Component} from 'react';
import axios from 'axios';
import white_frame from './white_frame.jpg'
import Checkout from '../Checkout/Checkout'
import './Furniture.css';

class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: [],
      cart: [],
      quantity: ''
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
    .then(res => {
      this.setState({cart: res.data})
    })
    .catch(err => console.log(err))
  }

  
  
  render() {
    console.log(this.state.furniture)
    return(
      <div>
            <h3>Furniture</h3>
            {this.state.furniture?.map(furniture => (
             <div key='{furniture.product_id}' > 
             <span className='container-box'>
              <img src={white_frame} className = 'photo' />
            <ul>
             {furniture.product_name, '',
             furniture.product_name, '',
             furniture.product_description} 
             <button className = 'button' onClick ={() => this.addToCart()}>Add</button>
             </ul>

             </span>
             </div>
            )) }
            <Checkout
            cart={this.state.cart}
            addToCart ={this.addToCart}
            />
        </div>
    )
  }    
}
export default Furniture;