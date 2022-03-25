import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Learning Heroes</h2>
           <nav>
           <input type="checkbox" id="check" />
           <label for="check" className='checkbtn'>
            </label>
            <ul className='navbar-items'>
                <li><a href="/shop">Home</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/about">About</a></li>
            </ul>
           </nav>
        </div>
    );
};

export default Header;