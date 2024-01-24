import FooterLogo from "../../assets/Logo .svg";
import { Link } from "react-router-dom";

import "./footer-styles.css";

const Footer = () => {
  const ulStyle = {
    margin: "0px",
    marginRight: "20px",
    padding: "0px",
  };

  const liStyle = {
    listStyle: "none",
    marginBottom: "10px",
    fontSize: "13px",
    fontWeight: "400",
  };

  const aStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div className='footer-container'>
      <section className='section-1'>
        <img src={FooterLogo} alt='logo' />
        <p>
          We are a family owned Mediterraneran restaurant, focused on traditional recipes served
          with a modern twist.
        </p>
      </section>
      <section className='section-2'>
        <h5>Important Links</h5>
        <nav className='nav-body'>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to='/' style={aStyle}>
                Home
              </Link>
            </li>
            <li style={liStyle}>
              <Link to='/about' style={aStyle}>
                About
              </Link>
            </li>
            <li style={liStyle}>
              <Link to='/menu' style={aStyle}>
                Menu
              </Link>
            </li>
            <li style={liStyle}>
              <Link to='/reservation' style={aStyle}>
                Reservations
              </Link>
            </li>
            <li style={liStyle}>
              <Link to='/order' style={aStyle}>
                Order Online
              </Link>
            </li>
            <li style={liStyle}>
              <Link to='/login' style={aStyle}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className='section-3'>
        <h5>Contact</h5>
        <div>
          <p>Address: 123 Town Street Chicago</p>
          <p>Phone: +00 123 456 789</p>
          <p>Email: little@lemon.com</p>
        </div>
      </section>
      <section className='section-4'>
        <h5>Social Media Links</h5>
        <div>
          <a href='#_blank'>Facebook</a>
          <a href='#_blank'>Instagram</a>
          <a href='#_blank'>Twitter</a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
