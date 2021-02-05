import React, {Component} from 'react';
import axios from 'axios';

class Checkout extends Component {
    handleCheckout = () => {
        axios.post('/api', {amount: Math.round(this.props.total), order_id: this.props.orders, user_id: this.props.user})
        .then(res => {
            this.props.getUser()
        })
    }
    render () {
        return(
            <div>
                <h1>Checkout</h1>
            </div>
        )
    }
}

export default Checkout;