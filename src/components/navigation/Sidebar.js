import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faUser,
  faDumbbell,
  faRunning,
  faSignInAlt,
  faUserPlus,
  faCog,
  faEdit, // Import the faEdit icon
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../../context/AuthContext';
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <ul className={`sidebar-links ${sidebarOpen ? "visible" : ""}`}>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faUser} /> Profile
              </Link>
            </li>
            <li>
              <Link to="/update-profile" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faEdit} /> Update Profile
              </Link>
            </li>
            <li>
              <Link to="/workouts" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faDumbbell} /> Workouts
              </Link>
            </li>
            <li>
              <Link to="/exercises" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faRunning} /> Exercises
              </Link>
            </li>
            <li>
              <Link to="/prouse" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faCog} /> Settings
              </Link>
            </li>
            <li>
              <button className="Bet" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignInAlt} /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/signin" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faSignInAlt} /> Sign In
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;





