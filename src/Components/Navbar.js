import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {
    return(
        <nav className='nav-wrapper purple darken-4'>
            <Link to='/' className='left logo'> AcadView </Link>
            <ul className='right list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Info'>Personal Info</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);