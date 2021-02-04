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
            <section className='checkout'>
                <div>Cart</div>
                <section>
                   <button onClick={props.clearCart}>Clear Cart</button>
                </section>
                <section>
                    {props.cartIsLoading ? (
                        null) : (
                            props.cart.map(element => {
                                return(
                                <Update 
                                    key={element.id}
                                    orderItem={element}/>
                            )
                        })  
                    )}
                    </section>
                {/* </section> */}
                    {/* {this.props.order_item?.filter(element => element.furniture).map((furniture, i) => (
                        <section key ={i}>
                            <img src='' className = 'photo' />
                     <h4>
                         {furniture.product_name}</h4>
                    <h5>${furniture.product_price}.00</h5>
                        </section>
                    ))} */}
                {/* </section> */}
               
                {/* // <input
                // className = 'input-box' value ={this.state.newQuantity} onChange={e => this.handleInput(e.target.value)}/>
                // <button onClick ={() => this.handleEdit()}>Edit</button>
                // <button onClick ={() => this.removeItem()}>Delete</button>    */}
                </section>       
        )
    }

function mapStateToProps(reduxState){
    return {
        ...reduxState.cart,
        ...reduxState.user
    }
}
export default connect(mapStateToProps, {updateCart, clearCart, getCart})(Checkout);