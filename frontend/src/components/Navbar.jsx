import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import vite from '../assets/vite.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style = {{backgroundImage: `url(${vite})`}}></div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile/">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
