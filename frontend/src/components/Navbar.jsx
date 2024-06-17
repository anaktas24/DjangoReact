import React from 'react';
import '../styles/Navbar.css';
import vite from '../assets/vite.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style = {{backgroundImage: `url(${vite})`}}></div>
      <ul className="navbar-links">
        <li><a href="home">Home</a></li>
        <li><a href="about"></a></li>
         <li><a href="profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
