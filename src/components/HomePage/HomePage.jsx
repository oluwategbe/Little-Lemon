import React from 'react'
import "./home.css"
import Specials from '../Specials/Specials'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className='home'>
      <div className="title">
        <h1>This weeks specials!</h1>
        <Link to="/" style={{textDecoration: 'none'}}>
          <button>Online Menu</button>
        </Link>
      </div>
      <Specials />
    </section>
  )
}

export default HomePage