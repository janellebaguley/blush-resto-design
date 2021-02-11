import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            verPassword: ''
        }
    }

    handleInput(prop, val){
        this.setState({prop: val})
    }

    handleRegister = () => {
        const {email, password, verPassword} = this.state
        
        if(password !== verPassword){
            alert("Passwords don't match")
        } else {
            axios.post('/auth/register-copy', {email, password})
            .then(res => {
                this.props.history.push('/order-history')
            })
        }
    }
    render(){
        const {email, password, verPassword} = this.state;
        return(
            <div>
                <section>
                    <h6>Register below</h6>
                    <div>
                        <input 
                            placeholder = 'Email'maxLength = '250'
                            value={email}
                            onChange = {e => this.handleInput('email', e.target.value)}/>
                    </div>
                    <div>
                        <input
                            value={password}
                            maxLength='40'
                            type='password' 
                            placeholder='Password'
                            onChange={e => this.handleInput('password', e.target.value)}/>
                    <div>
                        <input
                            value={verPassword}
                            placeholder='Verify Password'
                            maxLength='40'
                            type='password' 
                            onChange={e => this.handleInput('verPassword', e.target.value)}/>
                </div>
                        <button onClick={this.handleRegister} className='login-modal-button'>Register</button>
                        </div>
                </section>
            </div>
        )      
    }
}
export default Register;