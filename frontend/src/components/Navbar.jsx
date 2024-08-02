import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import '../styles/Navbar.css'

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }


    return (
        <nav className="nav">
            <div className="container">
                <NavLink className="logo" to="/">Logo</NavLink>
                <input type="checkbox" id="menu-checkbox" className="menu-checkbox" />
                <label htmlFor="menu-checkbox" className="menu-icon">
                    <span className="navicon"></span>
                </label>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        {user ? (
                            <>

                              <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                              <NavLink className="navlink" to="/" onClick={handleLogout}>Logout</NavLink>
                            </>
                        ) : (
                            <>
                              <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
