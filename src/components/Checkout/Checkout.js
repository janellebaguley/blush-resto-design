import React, {Component} from 'react';
import axios from 'axios';

class Checkout extends Component {
    handleCheckout = () => {
        axios.post('/api/checkout', {amount: Math.round(this.props.total), order_id: this.props.orders, user_id: this.props.user})
        .then(res => {
            this.props.getUser()
        })
    }
    render () {
        return(
            <div>
                {this.props.total}
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default Checkout;