import React from 'react'
import Chicago from './Chicago/Chicago'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Testimonials from './Testimonials'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomePage />
      <Testimonials />
      <Chicago />
      <Footer />
    </>
  )
}

export default Home