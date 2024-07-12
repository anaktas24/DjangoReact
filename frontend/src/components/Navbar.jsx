import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import vite from '../assets/vite.svg';
import { FaHome, FaUser, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style = {{backgroundImage: `url(${vite})`}}></div>
      <ul className="navbar-links">
        <li><Link to="/"><FaHome/></Link></li>
        <li><Link to="/about"><FaInfoCircle/></Link></li>
        <li><Link to="/profile/"><FaUser/></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
