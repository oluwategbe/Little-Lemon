import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "./Header"
import BookingForm from './BookingForm/BookingForm'
import footerLogo from "../assets/footerLogo.PNG";
import "../booking.css"

const BookingPage = () => {

  const navigate = useNavigate();

  const initialState = {
    availableTimes: [],
  };

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };
  const submitAPI = function(formData) {
    return true;
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const availableTimes = fetchAPI(action.payload);
        return {
          ...state,
          availableTimes: availableTimes,
        };
      default:
        return state;
    }
  };

  // const updateTimes = (state, action) => {
  //   const availableTimes = fetchAPI(action.payload);
  //   console.log(availableTimes + "availalbe from update times")
  //   return {
  //     ...state,
  //     availableTimes: availableTimes
  //   };
  // };

  // const initializeTimes = (date) => {
  //   const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  //   const result = fetchAPI("08-02-2023");
  //   console.log(result);
  //   dispatch({ type: 'UPDATE_TIMES', payload: times });
  // };

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if(isSubmitted){
      navigate("/confirmation")
    }
  }

  const initializeTimes = (date) => {
    const today = new Date();
    // const times = fetchAPI(today);
    dispatch({ type: 'UPDATE_TIMES', payload: today });
    // console.log(availableTimes + ' available times');
    // return {
    //   availableTimes: availableTimes
    // };
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <Header />
      <div className="booking">
        <div className="bookingHero">
          <div className="text">
            <h1>Reserve a table</h1>
            <h3>Choose a table at your own convenience, for any ocassion</h3>
          </div>
          <img src={footerLogo} alt="logo" className="pic" />
        </div>
        <div className="bookingForm">
          <BookingForm availableTimes={availableTimes.availableTimes} initializeTimes={initializeTimes} submitForm={submitForm}/>
        </div>
      </div>
    </>
  )
}

export default BookingPage