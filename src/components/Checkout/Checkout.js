import {Component} from 'react';
import axios from 'axios';
import './Checkout.css'
import xmas from '../Home/xmas.jpg'

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
            <section className='checkout'>
            <div>Cart
                <img src={xmas} alt="" width="450px"/>
                {/* <button onClick={() => this.removeItem(cart.order_item_id)}>Remove</button> */}
            </div>
            </section>
        )
    }
}
export default Checkout;