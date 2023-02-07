import React, { useReducer, useState } from 'react'
import BookingForm from './BookingForm/BookingForm'

const BookingPage = () => {

  const initialState = {
    availableTimes: [],
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return {
          ...state,
          availableTimes: action.payload,
        };
      default:
        return state;
    }
  };

  const initializeTimes = (date) => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <div>
      Book now
      <BookingForm availableTimes={availableTimes.availableTimes} initializeTimes={initializeTimes}/>
    </div>
  )
}

export default BookingPage