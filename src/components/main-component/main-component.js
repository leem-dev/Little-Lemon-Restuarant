import React from "react";
import { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../../routes/booking-element/booking-element";
import ConfirmBooking from "../../routes/booking-element/confirm-booking-element";
import HomePage from "../../routes/homepage-element/homepage-element";
import { myFetchAPI, mySubmitAPI } from "../../path/to/api";

const updateTimes = async (state, date) => {
  try {
    const newAvailableTimes = await myFetchAPI(date);
    return { availableTimes: newAvailableTimes };
  } catch (error) {
    console.error("Error updating times:", error);
    throw error;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, { availableTimes: [] });
  const navigate = useNavigate();

  const initializeTimes = async dispatch => {
    try {
      const currentDate = new Date();
      const initialState = await myFetchAPI(currentDate);
      dispatch({ type: "UPDATE_TIMES", availableTimes: initialState });
    } catch (error) {
      console.error("Error initializing times:", error);
    }
  };

  const submitForm = async formData => {
    navigate("/confirmed");
  };

  useEffect(() => {
    initializeTimes(dispatch);
  }, []);

  return (
    <div data-testid='main-component'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
              // loading={loading}
              fetchAPI={myFetchAPI}
            />
          }
        />
        <Route path='/confirmed' element={<ConfirmBooking />} />
      </Routes>
    </div>
  );
};

export default Main;
