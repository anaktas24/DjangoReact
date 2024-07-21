import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import vite from '../assets/vite.svg';
import { FaHome, FaUser, FaInfoCircle } from 'react-icons/fa';
import { jwtDecode } from "jwt-decode";
import AuthContext from '../AuthContext.jsx'
import {useContext} from 'react'

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")
  if (token){
    const decoded = jwt_decode(token)
    var user_id = decoded.user_id
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo" style = {{backgroundImage: `url(${vite})`}}></div>
      <ul className="navbar-links">
        <li><Link to="/"><FaHome/></Link></li>
        <li><Link to="/about"><FaInfoCircle/></Link></li>
        {token === null &&
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">Register</Link>
                </li>
              </>
              }
        {token !== null &&
              <>
                <li class="nav-item">
                  <a class="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}>Logout</a>
                </li>
              </>
              }
        <li><Link to="/profile/"><FaUser/></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
