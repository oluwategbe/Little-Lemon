import React from 'react'
import Nav from './Nav'
import logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo'/>
      <Nav />
    </header>
  )
}

export default Header