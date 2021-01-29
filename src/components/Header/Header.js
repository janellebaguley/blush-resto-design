import {withRouter, Link} from 'react-router-dom';
import './Header.css';
import blush from './blush.png'

const Header = props => {
    return (
        <header className = 'header-container'>
        <h1><img src={blush} alt='Blush Restoration and Design'/></h1>
        
            <nav>
                <Link to = '/' className='nav-links'>Home</Link>
                <Link to = '/furniture' className='nav-links'>Furniture</Link>
                <Link to = '/designs' className='nav-links'>Designs</Link>
                <Link to = '/login' className='nav-links'>Login</Link>
                <Link to = '/checkout' className='nav-links'>Cart</Link>
            </nav>
            
        </header>
    )
}
export default withRouter(Header)