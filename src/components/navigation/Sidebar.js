import React from "react";
import { Link } from "react-router-dom";
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
 
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {/* Sidebar Toggle Icon */}
      <div className="sidebar-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <ul className={`sidebar-links ${sidebarOpen ? "visible" : ""}`}>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
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
          <Link to="/signup" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faUserPlus} /> Sign Up
          </Link>
        </li>
        <li>
          <Link to="/signin" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faSignInAlt} /> Sign In
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faCog}/> Setting
          </Link>
          </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;


