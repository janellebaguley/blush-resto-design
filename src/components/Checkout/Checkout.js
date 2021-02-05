import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {updateCart, clearCart, getCart} from '../../redux/cartReducer'
import axios from 'axios';
import UpdateCart from './UpdateCart'
import './Checkout.css'

class Checkout extends Component {
        constructor(){
            super()
            this.state = {
            user: {},
            orderItems: [],
            furniture: [],
            total: 0.00
            }
        }

    componentDidMount(){
            this.handleGetUser()
    }

    handleGetUserCart = async() => {
        await axios.get (`/api/cart/${this.state.user.user_id}`)
        .then(res => {
            this. setState({orderItems: res.data})
        })
        let sum = this.state.orderItems.reduce((acc, curr) => {
            return acc + parseFloat(curr.price)
        }, 0)
        this.setState({total: Math.round(sum * 100) / 100})
    }
    
    
    
        render(){
            const mappedCart= this.state.orderItems.map((item, i) => {
                return (
                    <UpdateCart
                    key = {i}
                    cart= {item}
                    getCart= {this.handleGetUserCart}/>
                )
            })
        return(
            <div className='checkout'>
                <div>Cart</div>
                <section>
                   <h6>Total: ${this.state.total}</h6>
                </section>
                    
                </div>       
        )
    }
}
// const mapStateToProps = (reduxState) => {
//     return {
//         ...reduxState.cart,
//         ...reduxState.user
//     }
// }
export default Checkout;