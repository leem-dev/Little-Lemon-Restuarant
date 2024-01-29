import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../header-styles.css";

const Navigation = () => {
  const liStyle = {
    listStyle: "none",
    fontSize: "17px",
    fontWeight: "700",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("I am here");
  };

  useEffect(() => {
    const outsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", outsideClick);

    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [dropdownRef]);

  return (
    <nav className={`dropdown-menu ${isMenuOpen ? "open" : ""}`} ref={dropdownRef}>
      <div className='menu-toggle' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={`nav-list ${isMenuOpen ? "visible" : ""}`}>
        <li style={liStyle}>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/menu' className='nav-link'>
            Menu
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/reservation' className='nav-link'>
            Reservations
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/order' className='nav-link'>
            Order Online
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
