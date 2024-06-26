import React from "react";
import './Navbar2.css';
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="nav-bar">
          <a href="/" className="logo"><img src="logo.png"  alt=""/></a>
            <div className="navigation">
                <div className="nav-items">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="/blog">Articles</a>
                    <a href="/events">Events</a>
                    <a href="/team">Team</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
