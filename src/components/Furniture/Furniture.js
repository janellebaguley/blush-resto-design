import React, {Component} from 'react';
import axios from 'axios';
import white_frame from './white_frame.jpg'
import Auth from '../Auth/Auth'
// import FurnitureDisplay from './FurnitureDisplay'
import './Furniture.css';

class Furniture extends Component{
  constructor(){
    super()
    this.state = {
      furniture: [],
      user: {},
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
      {order_id: this.state.user.order_id, 
      furniture: furnitureId, 
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
  

  render() {
    // const mappedFurniture = this.state.furniture.map((furniture, i) => {
    //   return (
    //     <FurnitureDisplay
    //       key={i}
    //       furniture={furniture}
    //       addToCart={this.addToCart}/>
    //   )
    // })
    // console.log(this.state.furniture)
    return(
      <main >
          <article className='container-box'>
            {/* <h3>Furniture</h3> */}
            {this.state.furniture?.map((furniture, i) => (
              <div key={i} className='image-container'> 
              <img src={white_frame} alt = 'frame' className = 'photo' />
              <div className = 'furniture-info'> 
                <h4>{furniture.product_name}</h4>
                <h5>${furniture.product_price}.00</h5>
              </div>
             <button className = 'add-button' onClick ={() => this.addToCart(furniture.product_id)}>Add</button>
             </div>
            )) }
            </article>
            <section>
              {/* {mappedFurniture} */}
            </section>
            <div>
              {this.state.registerView
              ?(<Auth
                  user ={this.state.user}
                  login ={this.handleLogin}
                  toggle = {this.handleToggle}/>)
                :(null)}
            </div>
        
        </main>
    )
  }    
}
export default Furniture;