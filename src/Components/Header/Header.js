import React from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Learning Heroes</h2>
           <nav>
           <input type="checkbox" id="check" />
           <label for="check" className='checkbtn'>
            <HiMenuAlt1 className='nav-bar-icon'></HiMenuAlt1>
            </label>
            <ul className='navbar-items'>
                <li><a href="/shop">Home</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/about">About</a></li>
            </ul>
           </nav>
        </div>
    );
};

export default Header;