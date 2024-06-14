import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="home">Home</a></li>
        <li><a href="about"></a></li>
      </ul>
      <div className="navbar-profile">
        <li><a href="profile">Profile</a></li>
      </div>
    </nav>
  );
};

export default Navbar;
