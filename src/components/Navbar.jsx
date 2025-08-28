// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">YMH Restaurant Dashboard</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="nav-link">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );    
}
export default Navbar
