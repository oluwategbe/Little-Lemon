import React, { useReducer, useState } from 'react'
import "./index.css"

const BookingForm = ({availableTimes, initializeTimes, submitForm}) => {

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={handleDateChange}
        name="date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={formData.time}
        onChange={handleChange}
        name="time"
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formData.guests}
        name="guests"
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        name="occasion"
        onChange={handleChange}
      >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"/>
    </form>
  )
}

export default BookingForm