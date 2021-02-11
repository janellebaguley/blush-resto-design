import React, {Component} from 'react'
import OrderHistory from './OrderHistory'
import LoginAuth from './LoginAuth'
import axios from 'axios'

class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {},
            orders: [],
            email: '',
            password: '',
            verPassword: ''
        }
    }

    componentDidMount(){
        this.handleGetUser()
    }

    handleInput(prop, val){
        this.setState({
            [prop]: val
        })
    }

    handleGetUser = async() => {
        await axios.get('/auth/session-user-copy')
        .then(res => {
            this.setState({user: data})
        })
        this.handleOrderHistory()
    }

    handleLogin = async(data) => {
        await this.setState({user: data})
        this.handleOrderHistory()
    }

    handleOrderHistory = () => {
        axios.get(`/api/order_history/${this.state.user.user_id}`)
        .then(res => {
            this.setState({orders: res.data})
        })
    }
    render(){
        const mappedOrders = this.state.orders.map((order, i) => {
            return (
                <OrderHistory 
                    key ={i}
                    order={order}/>
            )
        })
    
    return(
        <div>
        <h6>Order History</h6>
        {mappedOrders}
            <section>
                <LoginAuth
                    user= {this.state.user}
                    login={this.handleLogin}/>
            </section>
        </div>
        )
    }
}

export default User;