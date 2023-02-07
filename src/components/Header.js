import React from 'react'
import Nav from './Nav'
import logo from "../assets/Logo.png"
import hamburger from '../assets/hamburger.png'
import shop from '../assets/shop.png'
import "../header.css"

const Header = () => {

  const openHam = () => {
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.ham').style.background = 'white';
  }

  return (
    <header className='header'>
      <img onClick={openHam} className='ham' src={hamburger} alt="hamburger"/>
      <img src={logo} alt='logo'/>
      <Nav />
      <img className='shop' src={shop} alt="shop"/>
    </header>
  )
}

export default Header