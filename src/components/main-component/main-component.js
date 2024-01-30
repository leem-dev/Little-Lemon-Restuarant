import React from "react";
import { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../../routes/booking-element/booking-element";
import ConfirmBooking from "../../routes/booking-element/confirm-booking-element";
import HomePage from "../../routes/homepage-element/homepage-element";
// import fetchData from "../../path/to/api";

const Main = () => {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = async function (date) {
    const response = await fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    );
    const data = await response.json();
    return data;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = async (state, date) => {
    const newAvailableTimes = await fetchAPI(date);
    return { availableTimes: newAvailableTimes };
  };

  // const initializeTimes = { availableTimes: fetchAPI(new Date()) };
  const initializeTimes = async () => {
    try {
      const initialState = await fetchAPI(new Date());
      dispatch({ type: "UPDATE_TIMES", availableTimes: initialState.availableTimes });
    } catch (error) {
      console.error("Error initializing times:", error);
    }
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();
  const submitForm = formData => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div data-testid='main-component'>
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
