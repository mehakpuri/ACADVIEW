import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
//    console.log(props);
//    setTimeout(()=>{
//                props.history.push('/about');
//                }, 2000);
    return(
        <nav className='nav-wrapper blue darken-4'>
            <Link to='/' className='brand-logo left'>MERN Masters</Link>
            <ul className='right'>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/about'> About </Link></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);

// Navbar props are empty
// Navbar is outside router, so properties like history.push are not available here cz these properties come from route component

// we have to use withRouter to make our Navbar supercharged, so its available to recieve props (HOC - High Order Component)