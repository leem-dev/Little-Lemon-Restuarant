import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo .svg";
import Navigation from "./navigation-component/navigation-component";
import "./header-styles.css";

const Header = () => {
  const ulStyle = {
    margin: "0px",
    marginRight: "20px",
    padding: "0px",
    display: "flex",
    justifyContent: "space-between",
  };

  const liStyle = {
    listStyle: "none",
    fontSize: "17px",
    fontWeight: "700",
  };

  const aStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <header data-testid='header-component'>
      <div className='header-section'>
        <img src={Logo} alt='Logo' className='logo' />
        <nav className='nav-body-list'>
          <ul style={ulStyle} className='nav-list'>
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
              <Link to='/booking' style={aStyle} className='nav-link'>
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
        </nav>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
