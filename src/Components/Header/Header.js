import React from 'react';
import Logo from './favicon.png'
import { HiMenuAlt1 } from "react-icons/hi";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <h2>Learning Heroes</h2>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className='checkbtn'>
                    <HiMenuAlt1 className='nav-bar-icon'></HiMenuAlt1>
                    </label>
                    <ul className='navbar-items'>
                        <li><a href="/shop">Home</a></li>
                        <li><a href="/instructors">Instructors</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
        </div>
    );
};

export default Header;