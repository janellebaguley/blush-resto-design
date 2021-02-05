import React, {Component} from 'react'
import axios from 'axios'

class UpdateCart extends Component {
    handleQuantityInc = () => {
        const quantityObj = {
            quantity: 2,
            price: this.props.orders.price * 2
        }
        axios.put(`/api/item-quantity/${this.props.orders.order_item_id}`, quantityObj)
        .then(res => {
            this.props.getCart();
        })
        this.props.getCart();
    }
    handleQuantityDec = () => {
        const quantityObj = {
            quantity: 1,
            price: this.props.orders.price}

        axios.put(`/api/item-quantity/${this.props.orders.order_item_id}`, quantityObj)
        .then(res => {
            this.props.getCart();
        })
    }
    handleDeleteItem = () => {
        axios.delete(`/api/cart-item/${this.props.orders.order_item_id}`)
        .then(res => {
            this.props.getCart();
        })
    }

    render(){
    return (
    <div>
        <span>{this.props.orders.product_name}</span>
        <section>
            <p>${this.props.orders.price}</p>
        </section>
        <div>
            <button onClick={this.handleQuantityDec}> 1 </button>
            <button onClick={this.handleQuantityInc}> 2 </button>
        </div>
    </div>
        )   
    }
}


export default UpdateCart;