import {Component} from 'react';
import axios from 'axios';

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            furniture: [],
            imageUrl: ''
        }
    }

    removeItem = (id) => {
        axios.delete(`/api/cart/:${id}`)
        .then(() => {
            this.getProducts()
        })
        .catch(err => console.log(err))
    }
        render(){
        return(
            <div>cart
                {/* <button onClick={() => this.removeItem(cart.order_item_id)}>Remove</button> */}
            </div>
        )
    }
}
export default Checkout;