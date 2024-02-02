import React from "react";
import { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../../routes/booking-element/booking-element";
import ConfirmBooking from "../../routes/booking-element/confirm-booking-element";
import HomePage from "../../routes/homepage-element/homepage-element";
import { fetchAPI, submitAPI } from "../../path/to/api";

// const fetchAPI = async date => {
//   console.log("Type of date:", typeof date);
//   try {
//     const response = await fetch(fakeAPI.fetchAPI(new Date(date)));
//     const data = await response.json();

//     console.log("Response", response);

//     console.log("Data", data);

//     return data.availableTimes;
//   } catch (error) {
//     console.error("Error fetching API:", error);
//     throw error;
//   }
// };

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
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(updateTimes, { availableTimes: [] });
  const navigate = useNavigate();

  // const submitAPI = function (formData) {
  //   return true;
  // };

  const initializeTimes = async dispatch => {
    try {
      const initialState = await fetchAPI(new Date().toISOString().split("T")[0]);
      dispatch({ type: "UPDATE_TIMES", availableTimes: initialState });
    } catch (error) {
      console.error("Error initializing times:", error);
    }
  };

  const submitForm = async formData => {
    setLoading(true);
    try {
      if (await submitAPI(formData)) {
        navigate("/confirmed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
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
              loading={loading}
              fetchAPI={fetchAPI}
            />
          }
        />
        <Route path='/confirmed' element={<ConfirmBooking />} />
      </Routes>
    </div>
  );
};

export default Main;
