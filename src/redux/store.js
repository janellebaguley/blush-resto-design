import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    reducer: reducer,
    cart: cartReducer
})

export default createStore(rootReducer, (applyMiddleware(promiseMiddleware)))