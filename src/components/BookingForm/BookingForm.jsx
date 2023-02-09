import React, { useState } from 'react'
import "./index.css"

const BookingForm = ({availableTimes, initializeTimes, submitForm}) => {

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateForm();
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value
    });
    initializeTimes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (!isValid) {
      return;
    }
    submitForm(formData);
    console.log("submitted")
  };

  const validateForm = () => {
    const { date, time, guests, occasion } = formData;
    if ( date.trim() !== '' && time.trim() !== '' && guests.trim() !== '' && occasion.trim() !== '' ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className='formPage'>
      <h2>Make a reservation</h2>
      <form onSubmit={handleSubmit} className="form">
        <label aria-label="Choose date" htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={formData.date}
          onChange={handleDateChange}
          name="date"
          required
          aria-label="date"
        />
        <label aria-label="Choose time" htmlFor="res-time">Choose time</label>
        <select
          id="res-time "
          value={formData.time}
          onChange={handleChange}
          name="time"
          required
          aria-label="time"
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label aria-label="Number of guests" htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formData.guests}
          name="guests"
          onChange={handleChange}
          required
          aria-label="guests"
        />
        <label aria-label="Occasion" htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          name="occasion"
          onChange={handleChange}
          required
          aria-label="occasion"
        >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
        </select>
        <input aria-label="On Click" type="submit" value="Make Your reservation" disabled={false}/>
      </form>
    </div>
  )
}

export default BookingForm