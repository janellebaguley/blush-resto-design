import {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer';
import {clearUser} from '../../redux/reducer';
import './Auth.css';

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            verPassword: '',
            registerView: false
        }
    }
    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }

handleRegister = () => {
        const {username, email, password, verPassword} = this.state

        if (password && password === verPassword) {
            axios.post('/api/register', {username, email, password})
                .then(res => {
                    this.props.getUser(res.data)
                    this.props.history.push('/')
                })
                .catch(err => console.log(err))
        } else {
            alert("Passwords don't match")
        }
    }

    handleLogin = () => {
        const {email, password} = this.state

        axios.post('/api/login', {email, password })
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/')
                
            })
            .catch(err => console.log(err))
    }
    handleLogout = () => {
        const {email, password} = this.state
        axios.get('/api/logout', email, password)
            .then(() => {
                this.props.clearUser();
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div >
                <section className= 'bottom-margin'>
                    {this.state.registerView
                    ? (
                        <div>
                        <h5>Register</h5>
                        <input
                        value={this.state.username}
                        name= 'username'
                        placeholder = 'Username'
                        onChange= {e => this.handleInput(e)}/>
                        </div>
                    ) : <h5>Login</h5>}
                    <input value= {this.state.email}
                    name = 'email'
                    placeholder = 'Email'
                    onChange= {e => this.handleInput(e)}/>
                    <input value={this.state.password}
                    name= 'password'
                    placeholder = 'Password'
                    onChange={e => this.handleInput(e)}/>
                    {this.state.registerView
                    ? (
                      <div>
                          <input value = {this.state.verPassword}
                          name='verPassword'
                          placeholder = 'Verify Password'
                          onChange={e => this.handleInput(e)}/>
                          <button onClick={this.handleRegister}>Register</button>
                          <>Have an account? <button onClick={this.handleToggle}>Login</button></>
                    </div>
                )
                : (
                <div>
                    <button  onClick ={this.handleLogin}>Login</button>
                    <><h6>Don't have an account?</h6>
                    <button onClick={this.handleToggle} className = 'logout, btn' >Register</button></>
                </div>)}
                
                <h3>{this.state.email}</h3> 
                <button  onClick={this.handleLogout}>Logout</button>
                    
                </section>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, clearUser})(Auth);