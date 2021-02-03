import {Component} from 'react';
import axios from 'axios';
import './Checkout.css'

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            newQuantity: ''
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
            // console.log(this.props.cart)
        return(
            <section className='checkout'>
                <div>Cart</div>
                <section>
                    {/* {this.props.order_item?.filter(element => element.furniture).map((furniture, i) => (
                        <section key ={i}>
                            <img src='' className = 'photo' />
                     <h4>
                         {furniture.product_name}</h4>
                    <h5>${furniture.product_price}.00</h5>
                        </section>
                    ))} */}
                </section>
               
                <input
                className = 'input-box' value ={this.state.newQuantity} onChange={e => this.handleInput(e.target.value)}/>
                <button onClick ={() => this.handleEdit()}>Edit</button>
                <button onClick ={() => this.removeItem()}>Delete</button>
            
            </section>
        )
    }
}
export default Checkout;