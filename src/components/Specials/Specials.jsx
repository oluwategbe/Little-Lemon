import React from 'react'
import "./specials.css"
import greekSalad from "../../assets/greek.jpg"
import bruchetta from "../../assets/bruchetta.png"
import lemon from "../../assets/lemon.png"
import order from "../../assets/order.png"

const Specials = () => {
  return (
    <div className="specialsContainer">
      <div className="specials">
        <img src={greekSalad} alt="greek salad" />
        <div className="text">
          <div className="title">
            <h3>Greek salad</h3>
            <h4>$12.99</h4>
          </div>
          <h4 className="desc">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </h4>
          <div className="order">
            <h4>Order a delivery</h4>
            <img src={order} alt="order" />
          </div>
        </div>
      </div>
      <div className="specials">
        <img src={bruchetta} alt="bruchetta" />
        <div className="text">
          <div className="title">
            <h3>Bruchetta</h3>
            <h4>$ 5.99</h4>
          </div>
          <h4 className="desc">
            Our Bruschetta is made from grilled bread that has
            been smeared with garlic and seasoned with salt and olive oil.
          </h4>
          <div className="order">
            <h4>Order a delivery</h4>
            <img src={order} alt="order" />
          </div>
        </div>
      </div>
      <div className="specials">
        <img src={lemon} alt="lemon dessert" />
        <div className="text">
          <div className="title">
            <h3>Lemon Dessert</h3>
            <h4>$ 5.00</h4>
          </div>
          <h4 className="desc">
            This comes straight from grandma’s recipe book, every
            last ingredient has been sourced and is as authentic as can be imagined.
          </h4>
          <div className="order">
            <h4>Order a delivery</h4>
            <img src={order} alt="order" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specials