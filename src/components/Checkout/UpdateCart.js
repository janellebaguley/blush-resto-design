// import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {updateCart} from '../../redux/cartReducer'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const UpdateCart = (props) => {

    // removeCartItem = () => {
    //     axios.delete(`/api/cart?product_id= ${props.orderItem.product_id}`)
    //     .then(res => {
    //         props.updateCart(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }

    // decreaseQuantity = () => {
    //     // const body = {product_id: props.order_item.product_id, quantity: (props.order_item. quantity -1 )}

    //     axios.put('/api/cart', quantity)
    //     .then(res => {
    //         props.updateCart(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }

    // increaseQuantity = () => {
    //     const body = {product_id: props.orderItem.product_id, quantity: (props.orderItem. quantity +1 )}

    //     axios.put('/api/cart', body)
    //     .then(res => {
    //         props.updateCart(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }

return (
    <div>
        {/* <button onClick={removeCartItem}> - </button>
        <section>
            <img src ={props.orderItem.image_url}/>
            <h4>{props.furniture.product_name}</h4>
        </section>
        <section>
            <button onClick={decreaseQuantity}> - </button>
            <h5>{props.orderItem.quantity}</h5>
            <button onClick={increaseQuantity}> + </button>
            <h4>${orderItem.price}</h4>
        </section> */}
    </div>
    )   
}

const mapStateToProps = (reduxState) => {
    return {
        ...reduxState.cart
    }
}

export default connect(null, {updateCart})(withRouter(UpdateCart))