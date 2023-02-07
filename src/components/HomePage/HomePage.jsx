import React from 'react'
import "./home.css"
import Specials from '../Specials/Specials'

const HomePage = () => {
  return (
    <section className='home'>
      <div className="title">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <Specials />
    </section>
  )
}

export default HomePage