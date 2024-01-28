import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import HamIcon from "../../../assets/hamburger-icon.svg";
import "../header-styles.css";

const Navigation = () => {
  // const ulStyle = {
  //   margin: "0px",
  //   marginRight: "20px",
  //   padding: "0px",
  //   width: "100%",
  //   display: "flex",
  // };

  const liStyle = {
    listStyle: "none",
    fontSize: "17px",
    fontWeight: "700",
  };

  const aStyle = {
    color: "black",
    textDecoration: "none",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <nav className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
      <div className='menu-toggle' onClick={toggleMenu}>
        {/* <img src={HamIcon} alt='ham-icon' className='ham-icon' /> */}
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      {/* {isMenuOpen && ( */}

      <ul className={`nav-list ${isMenuOpen ? "visible" : ""}`}>
        <li style={liStyle}>
          <Link to='/' style={aStyle} className='nav-link'>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/about' style={aStyle} className='nav-link'>
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/menu' style={aStyle} className='nav-link'>
            Menu
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/reservation' style={aStyle} className='nav-link'>
            Reservations
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/order' style={aStyle} className='nav-link'>
            Order Online
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/login' style={aStyle} className='nav-link'>
            Login
          </Link>
        </li>
      </ul>

      {/* )} */}
    </nav>
  );
};

export default Navigation;
