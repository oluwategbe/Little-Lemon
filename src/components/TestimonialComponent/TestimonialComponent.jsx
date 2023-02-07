import React from 'react'
import "./index.css"

const TestimonialComponent = ({ rating, img, name, testimony }) => {
  return (
    <div className='testi'>
      <h4>{rating}</h4>
      <div className="testiImg">
        <img src={img} alt="testimonial" />
        <h4>{name}</h4>
      </div>
      <h4>{testimony}</h4>
    </div>
  )
}

export default TestimonialComponent