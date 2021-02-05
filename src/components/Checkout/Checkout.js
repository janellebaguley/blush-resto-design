import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateCart, clearCart, getCart} from '../../redux/cartReducer'
import axios from 'axios';
import UpdateCart from './UpdateCart'
import './Checkout.css'

class Checkout extends Component {
        constructor(){
            super()
            this.state = {

            }
        }

    
    handleInput = (val) =>{
        this.setState({quantity: val})
    }

    handleEdit = (id) => {
        this.props.updateQuantity(id, this.state.newQuantity)
        this.setState({quantity: ''})
    }
    updateQuantity = (id, newQuantity) => {

        axios.put(`/api/cart/${id}`, {quantity: newQuantity})
      .then(res => {
        this.setState({cart: res.data})
      })
      .catch(err => console.log(err))
      }
    
      removeItem = (id) => {
        axios.delete(`/api/cart/:${id}`)
        .then(res => {
            this.setState({cart: res.data})
        })
        .catch(err => console.log(err))
    }
        render(){
        return(
            <div className='checkout'>
                <div>Cart</div>
                <section>
                   <button onClick={this.props.clearCart}>Clear</button>
                </section>
                <section>
                    {this.props.cartIsLoading ? (
                        null) : (
                            this.props.cart.map(element => {
                                return(
                                <UpdateCart
                                    key={element.id}
                                    orderItem={element}/>
                            )
                        })  
                    )}
                    </section>
                    
                </div>       
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
        ...reduxState.cart,
        ...reduxState.user
    }
}
export default connect(mapStateToProps, {updateCart, clearCart, getCart})(Checkout);