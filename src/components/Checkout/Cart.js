import React, {Component} from 'react';
import axios from 'axios';
import UpdateCart from './UpdateCart'
import Checkout from './Checkout'
import './Checkout.css'

class Checkout extends Component {
        constructor(){
            super()
            this.state = {
            user: {},
            orderItems: [],
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
                <section>
                   <h6>Total: ${this.state.total}</h6>
                   <div onClick={this.handleCompleteOrder}>
                        <Checkout
                        total ={Math.round(this.state.total * 100)}
                        getUser ={this.handleGetUser}
                        order= {this.state.user.order_id}
                        user={this.setState.user.user_id}/>
                   </div>
                   {mappedCart}
                </section>    
             </div>       
        )
    }
}

export default Cart;