import axios from 'axios';

const initialState = {
    cart: [],
    orderTotal: 0,
    cartIsLoading: true
}

const GET_CART = 'GET_CART'
const UPDATE_CART = 'UPDATE_CART'
const CLEAR_CART = 'CLEAR_CART'

export function getCart(){
    const res = axios.get('/api/cart')

    return {
        type: GET_CART,
        payload: res
    }
}

export function updateCart(cart) {
    return {
        type: UPDATE_CART,
        payload: cart
    }
}

export function clearCart () {
    axios.delete('/api/cart/clear')

    return {
        type: CLEAR_CART
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type){
        case GET_CART + '_PENDING':
            return {
                ...state,
                cartIsLoading: true
            }
        case GET_CART + '_FULFILLED':
            return {
                ...state,
                cartIsLoading: false,
                cart: payload.data
            }
        case GET_CART + '_REJECTED':
            return {
                ...state,
                cartIsLoading: false
            }
        case UPDATE_CART:
            return {...state, cart: payload}
        case CLEAR_CART:
            return {...state, cart: []}
        default: 
            return state
    }
}