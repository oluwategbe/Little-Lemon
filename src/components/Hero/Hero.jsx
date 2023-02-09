import React from 'react'
import hero from "../../assets/hero.png"
import "./hero.css"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='flex hero'>
      <div className="heroText">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h4>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
        <Link to="/booking" style={{textDecoration: 'none'}}>
          <button>Reserve a Table</button>
        </Link>
      </div>
      <img className="heroPic" src={hero} alt="hero"/>
    </section>
  )
}

export default Hero