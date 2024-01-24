import React from "react";
import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../../routes/booking-element/booking-element";
import ConfirmBooking from "../../routes/booking-element/confirm-booking-element";
import HomePage from "../../routes/homepage-element/homepage-element";

const Main = () => {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let randomDate = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      randomDate() < 0.5 ? result.push(i + ":00") : result.push(i + ":30");
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = (state, date) => {
    return { availableTimes: fetchAPI(new Date()) };
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();
  const submitForm = formData => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/booking'
          element={
            <BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />
          }
        />
        <Route path='/confirmed' element={<ConfirmBooking />} />
      </Routes>
    </div>
  );
};

export default Main;
