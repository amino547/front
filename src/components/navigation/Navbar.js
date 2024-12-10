import React from "react";
import { FaBars } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="navbar-center">
        <h2 className="animated-title">Management System Gym</h2>
      </div>
    </div>
  );
};

export default Navbar;

