import React from 'react';
import footerLogo from "../assets/footerLogo.PNG";
import "../footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={footerLogo} alt="logo" />
      <div className="footerLinks">
        <div className='footerLinkSection'>
          <p>Navigation</p>
          <ul>
            <li>
            <Link to="/home" style={{textDecoration: 'none'}}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about" style={{textDecoration: 'none'}}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="/menu" style={{textDecoration: 'none'}}>
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link to="/booking" style={{textDecoration: 'none'}}>
              <a>Reservations</a>
            </Link>
          </li>
          <li>
            <Link to="/order-online" style={{textDecoration: 'none'}}>
              <a>Order Online</a>
            </Link>
          </li>
          <li>
            <Link to="/login" style={{textDecoration: 'none'}}>
              <a>Login</a>
            </Link>
          </li>
          </ul>
        </div>
        <div className='footerLinkSection'>
          <p>Contact</p>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
          </ul>
        </div>
        <div className='footerLinkSection'>
          <p>Social Media Links</p>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer