import React from "react";
import Logo from "../../assets/Logo .svg";
import Navigation from "./navigation-component/navigation-component";
import "./header-styles.css";

const Header = () => {
  return (
    <header data-testid='header-component'>
      <div className='header-section'>
        <img src={Logo} alt='Logo' className='logo' />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
