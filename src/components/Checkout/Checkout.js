import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {updateCart, clearCart, getCart} from '../../redux/cartReducer'
import axios from 'axios';
import UpdateCart from './UpdateCart'
import './Checkout.css'

const Checkout = (props) => {
  useEffect(() => {
      props.getCart()
  }, [props.isLoggedIn])

    
    // handleInput = (val) =>{
    //     this.setState({quantity: val})
    // }

    // handleEdit = (id) => {
    //     this.props.updateQuantity(id, this.state.newQuantity)
    //     this.setState({quantity: ''})
    // }
    // updateQuantity = (id, newQuantity) => {

    //     axios.put(`/api/cart/${id}`, {quantity: newQuantity})
    //   .then(res => {
    //     this.setState({cart: res.data})
    //   })
    //   .catch(err => console.log(err))
    //   }
    
    //   removeItem = (id) => {
    //     axios.delete(`/api/cart/:${id}`)
    //     .then(res => {
    //         this.setState({cart: res.data})
    //     })
    //     .catch(err => console.log(err))
    // }

        return(
            <div className='checkout'>
                <div>Cart</div>
                <section>
                   <button onClick={props.clearCart}>Clear Cart</button>
                </section>
                <section>
                    {props.cartIsLoading ? (
                        null) : (
                            props.cart.map(element => {
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

function mapStateToProps(reduxState){
    return {
        ...reduxState.cart,
        ...reduxState.user
    }
}
export default connect(mapStateToProps, {updateCart, clearCart, getCart})(Checkout);