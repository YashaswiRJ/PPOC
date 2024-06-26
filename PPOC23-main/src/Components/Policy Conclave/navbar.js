// components/Navbar.js
import React from 'react';
import './navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <label>
        <input type="checkbox" />
        <div className="toggle">
            <span className="top_line common"></span>
            <span className="middle_line common"></span>
            <span className="bottom_line common"></span>
        </div>
        <div className='slide'>
            <div className="logo"><img src="https://i.postimg.cc/gcCFhZKw/logo-2.png"/></div>
            <ul>
                <li>
                    <a className="active" href="#home">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#pevents">Events</a>
                </li>
                <li>
                    <a href="#workshop">Workshops</a>
                </li>
                <li>
                    <a href="#pastspeaker">Past Speakers</a>
                </li>
            </ul>
        </div>
    </label>
    
  );
};

export default Navbar;