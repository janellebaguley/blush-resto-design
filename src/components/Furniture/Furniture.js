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
      order_item: [],
      quantity: '',
      order_id: '',
      product_id: '',
      order_total: ''
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
  addToCart = (order_id,
    product_id, 
    quantity,
    order_total) => {
    axios.post('/api/cart', {order_id,
      product_id, 
      quantity,
      order_total})
    .then(res => {
      this.setState({order_item: res.data})
    })
    .catch(err => console.log(err))
  }

  
  
  render() {
    const {order_id, product_id, quantity, order_total} =this.state;
    console.log(this.state.furniture)
    return(
      <div>
            <h3>Furniture</h3>
            {this.state.furniture?.map(furniture => (
             <div key='{furniture.product_id}' > 
             <article className='container-box'>
              <img src={white_frame} className = 'photo' />
            <h4>
             {furniture.product_name}</h4>
             <h5>${furniture.product_price}.00</h5>
             
             <button className = 'button' onClick ={() => this.addToCart()}>Add</button>
             </article>
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