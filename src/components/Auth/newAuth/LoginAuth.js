import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class LoginAuth extends Component {
    constructor(props){
    super(props)
    this.state = {
        email: '',
        password: ''
    }
  }

  handleLogin = async() => {
      const {email, password} = this.state
      await axios.post('/auth/login', {email, password})
      .then(res => {
          this.props.login(res.data)
      })
  }

  handleEmailInput(val) {
      this.setState({email:val})
  }

  handlePasswordInput(val) {
      this.setState({password: val})
  }

  render(){
      return(
        <div>
            <section>
            <h6>Sign in or <Link to = '/register'>Register</Link></h6>
            </section>
            <section>
                <input 
                    placeholder = 'Email'
                    maxLength = '250'
                    value={this.state.email}
                    onChange = {(e) => this.handleEmailInput(e.target.value)}/>
            </section>
            <section>
                <input 
                    placeholder='Password'
                    type='password'
                    maxLength='40'
                    value={this.state.password}
                    onChange={(e) => this.handlePasswordInput(e.target.value)}/>
            </section>
                    <button onClick={this.handleLogin}>Login</button>
        </div>
      )
  }
}
export default LoginAuth