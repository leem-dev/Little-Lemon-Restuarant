import React from "react";
import { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../../routes/booking-element/booking-element";
import ConfirmBooking from "../../routes/booking-element/confirm-booking-element";
import HomePage from "../../routes/homepage-element/homepage-element";

const fetchAPI = async date => {
  try {
    const response = await fetch(
      "https://drive.google.com/file/d/1PMLIeT_CGv6oGL7WoXa-ubgcSspRfyBL/view?usp=sharing"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};

const updateTimes = async (state, date) => {
  try {
    const newAvailableTimes = await fetchAPI(date);
    return { availableTimes: newAvailableTimes };
  } catch (error) {
    console.error("Error updating times:", error);
    throw error;
  }
};

const Main = () => {
  const submitAPI = function (formData) {
    return true;
  };

  const initializeTimes = async () => {
    try {
      const initialState = await fetchAPI(new Date().toISOString().split("T")[0]);
      dispatch({ type: "UPDATE_TIMES", availableTimes: initialState.availableTimes });
    } catch (error) {
      console.error("Error initializing times:", error);
    }
  };

  const [state, dispatch] = useReducer(updateTimes, { availableTimes: [] });

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
