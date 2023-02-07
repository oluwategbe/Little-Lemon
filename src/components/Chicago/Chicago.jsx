import React from 'react'
import "./chicago.css"

const Chicago = () => {
  return (
    <section className='chicago flex'>
      <div className="chicagoText">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h4>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
      </div>
      <div className="chicagoPics">
        <div className="chicagoPic"></div>
        <div className="chicagoPic"></div>
      </div>
    </section>
  )
}

export default Chicago