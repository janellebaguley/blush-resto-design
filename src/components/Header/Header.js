import {withRouter, Link} from 'react-router-dom';
import './Header.css';

const Header = props => {
    return (
        <header className = 'header-container'>
        <h1>Blush</h1>
        {/* {props.location.pathname !== '/'
        ? ( */}
            <nav>
                <Link to = '/' className='nav-links'>Home</Link>
                <Link to = '/furniture' className='nav-links'>Furniture</Link>
                <Link to = '/designs' className='nav-links'>Designs</Link>
                <Link to = '/login' className='nav-links'>Login</Link>
            </nav>
        {/* // ):
        // null} */}
        </header>
    )
}
export default withRouter(Header)