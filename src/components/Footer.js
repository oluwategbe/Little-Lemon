import React from 'react';
import footerLogo from "../assets/footerLogo.PNG";

const Footer = () => {
  return (
    <footer>
      <img src={footerLogo} alt="logo" />
      <div className="footerLinks">
        <div className='footerLinkSection'>
          <p>Navigation</p>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
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