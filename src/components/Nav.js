import React from 'react'
import "../nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav'>
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
    </nav>
  )
}

export default Nav