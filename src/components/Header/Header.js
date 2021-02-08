import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import './Header.css';
import blush from './blush.png'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            dropdownView: false
        }
    }

    toggleDropdown = () => {
        this.setState({dropdownView: !this.state.dropdownView})
      }

    render(){
    return (
        <div>
        <header className = 'header-container'>
        <h1><img className='blush' src={blush} alt='Blush Restoration and Design'/></h1>
        
            <nav className='desktop-menu'>
                <Link to = '/' className='nav-links'>Home</Link>
                <Link to = '/furniture' className='nav-links'>Furniture</Link>
                <Link to = '/designs' className='nav-links'>Designs</Link>
                <Link to = '/login' className='nav-links'>Login</Link>
                <Link to = '/checkout' className='nav-links'>Cart</Link>
            </nav>
            <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdownView
          ? (
            <nav className = 'mobile-menu'>
                <Link to = '/' className='nav-links'>Home</Link>
                <Link to = '/furniture' className='nav-links'>Furniture</Link>
                <Link to = '/designs' className='nav-links'>Designs</Link>
                <Link to = '/login' className='nav-links'>Login</Link>
                <Link to = '/checkout' className='nav-links'>Cart</Link>
            </nav>
            )
            : null}
        </header>
        </div>
        )
    }
}
export default withRouter(Header)