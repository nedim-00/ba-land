import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './componentCSS/Navbar.css';
import logo from '../images/NavbarImages/logo.png';
import close from '../images/NavbarImages/close.png';
import menu from '../images/NavbarImages/menu.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
  return (
    
    <nav className="navbar">
        <div className="navbar-container">
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img className='logo' src={logo} alt="" />
            </NavLink>

            <div className="menu-icon" onClick = {handleClick}>
                <img src={click ? close : menu} alt="" />
            </div>

            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <NavLink to="/" className={({isActive}) =>  (isActive ? 'nav-link-active' : 'nav-links')} onClick={closeMobileMenu}>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/allplaces" className={({isActive}) =>  (isActive ? 'nav-link-active' : 'nav-links')} onClick={closeMobileMenu}>All places</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/addplace" className={({isActive}) =>  (isActive ? 'nav-link-active' : 'nav-links')} onClick={closeMobileMenu}>Add a new place</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar