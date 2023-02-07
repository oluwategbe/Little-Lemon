import React from 'react'
import "../testimonials.css"
import TestimonialComponent from './TestimonialComponent/TestimonialComponent'
import dan from "../assets/testimonial1.PNG"
import rita from "../assets/testimonial2.PNG"
import nancy from "../assets/testimonial3.PNG"
import john from "../assets/testimonial4.PNG"

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <h2>Testimonials</h2>
      <div className="testiContainer flex">
        <TestimonialComponent
          rating="4/5"
          img={dan}
          name="Dan Jobs"
          testimony="Lovely Food, I never want to leave."
        />
        <TestimonialComponent
          rating="5/5"
          img={rita}
          name="Rita Edwards"
          testimony="I can’t wait to have the next plate. Lovely stuff"
        />
        <TestimonialComponent
          rating="4.5/5"
          img={nancy}
          name="Nancy Smith"
          testimony="I love the way their customer service is."
        />
        <TestimonialComponent
          rating="4/5"
          img={john}
          name="John Daniel"
          testimony="Great taste. Would definitely recommend."
        />
      </div>
    </section>
  )
}

export default Testimonials