import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";


const Profile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="container">
        <NavLink className="logo" to="/">
          Logo
        </NavLink>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            {user ? (
              <>
                <NavLink className="navlinks" to="/profile">
                  Profile
                </NavLink>
                <NavLink className="navlinks" to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink className="navlinks" to="/" onClick={handleLogout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="navlinks" to="/dashboard">
                  Dashboard
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Profile;
