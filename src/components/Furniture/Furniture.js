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
      blush_user: {},
      isLoggedIn: false
    }
    this.getFurniture = this.getFurniture.bind(this)
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount(){
    axios.get('/api/furniture')
    .then(res => {
    this.setState({furniture: res.data})
  })
  this.handleGetSessionUser()
}

handleGetSessionUser = () => {
  axios.get('/api/session-user')
  .then(res => {
    this.setState({user: res.data})
  })
}

  getFurniture = () => {
    axios.get('/api/furniture')
    .then(furniture => {
      this.setState({furniture: {...this.state.furniture}})
    })
    .catch(err => console.log(err))
  }

  handleToggle = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
    this.props.history.push('/login')
  }

  addToCart = (furnitureId) => {
    // console.log(this.state.order_id)
    if(this.state.blush_user.user_id){
      const orderItem= 
    {order_id: this.state.blush_user.order_id, furnitureId, 
    quantity: 1}

    axios.post('/api/cart', orderItem)
    .then(res => {
      alert('Item added to cart')
    })
  } else {
    this.handleToggle()
  }
}

  render() {
  
    console.log(this.state.furniture)
    return(
      <div>
            <h3>Furniture</h3>
            {this.state.furniture?.map((furniture, i) => (
              <div key={i} > 
             <article className='container-box'>
              <img src={white_frame} className = 'photo' />
            <h4>
             {furniture.product_name}</h4>
             <h5>${furniture.product_price}.00</h5>

             <button className = 'button' onClick ={() => this.addToCart(furniture.product_id)}>Add</button>
             </article>
             </div>
            )) }
            {/* <Checkout
            order_item={this.state.order_item} */}
            {/* // addToCart ={this.addToCart} */}
            
        </div>
    )
  }    
}
export default Furniture;