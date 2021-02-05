import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import white_frame from './white_frame.jpg'
import Auth from '../Auth/Auth'
import FurnitureDisplay from './FurnitureDisplay'
import './Furniture.css';

class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: [],
      user: {},
      quantity: 1,
      registerView: false
    }
    
  }
  componentDidMount(){
  this.getFurniture()
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
    .then(res => {
      this.setState({furniture: res.data})
    })
    .catch(err => console.log(err))
  }

  handleToggle = () => {
    this.setState({registerView: !this.state.registerView})
    }

  addToCart = (furnitureId, price) => {
    // console.log(this.state.order_id)
    if(this.state.user.user_id){
      const orderItem= 
      {order_id: this.state.user.order_id, furniture: furnitureId, 
      quantity: 1,
      price}

    axios.post('/api/cart', orderItem)
    .then(res => {
      alert('Item added to cart')
    })
  } else {
    this.handleToggle()
  }
}
  handleLogin = (data) => {
    this.setState({user: data})
  }
  handleQuantityInc = () => {
    this.setState({
      quantity: 2
    })
  }
  handleQuantityDec = () => {
    this.setState({
      quantity: 1
    })
  }

  render() {
    const mappedFurniture = this.state.furniture.map((furniture, i) => {
      return (
        <FurnitureDisplay
          key={i}
          furniture={furniture}
          addToCart={this.addToCart}/>
      )
    })
    // console.log(this.state.furniture)
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
            <section>
              {mappedFurniture}
            </section>
            <div>
              {this.state.registerView
              ?(<Auth
                  user ={this.state.user}
                  login ={this.handleLogin}
                  toggle = {this.handleToggle}/>)
                :(null)}
            </div>
        </div>
    )
  }    
}
export default Furniture;