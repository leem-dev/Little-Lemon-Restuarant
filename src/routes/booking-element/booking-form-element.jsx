import { useState, useEffect } from "react";
import "./booking-element-styles.css";
import fakeAPI from "../../path/to/api";

const BookingForm = props => {
  const [newDate, setNewDate] = useState("");
  const [newTimes, setNewTimes] = useState("");
  const [newGuest, setNewGuest] = useState("");
  const [newOccasion, setNewOccasion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmission = e => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleDateChange = e => {
    setNewDate(e.target.value);
    props.dispatch(e);
  };

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (newDate) {
        try {
          const response = await fetch(fakeAPI);
          const contentType = response.headers.get("content-type");

          if (contentType && contentType.includes("application/json")) {
            // If the response is JSON, parse it
            const data = await response.json();

            // Check if the response has a property named 'availableTimes'
            if (data && data.availableTimes && Array.isArray(data.availableTimes)) {
              // Assuming 'availableTimes' is an array of strings
              setNewTimes(data.availableTimes.length > 0 ? data.availableTimes[0] : "");
            } else {
              console.warn(
                "Response does not have 'availableTimes' property or it's not an array:",
                data
              );
            }
          } else {
            console.warn("Response is not JSON:", response);
          }
        } catch (error) {
          console.error("Error fetching available times:", error);
        }
      }
    };

    fetchAvailableTimes();
  }, [newDate]);

  // useEffect(() => {
  //   const fetchAvailableTimes = async () => {
  //     if (newDate) {
  //       try {
  //         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //         const data = await response.json();
  //         setNewTimes(data.availableTimes[0]);
  //       } catch (error) {
  //         console.error("Error fetching available times:", error);
  //       }
  //     }
  //   };

  //   fetchAvailableTimes();
  // }, [newDate]);

  const formStyle = {
    display: "grid",
    gap: "20px",
  };
  return (
    <div className='form-box'>
      <div className='form'>
        <h2>Table Booking</h2>
        <form onSubmit={handleFormSubmission} style={formStyle}>
          <fieldset className='form-field'>
            <div>
              <label htmlFor='book-date'>Choose Date:</label>
              <input
                id='book-date'
                type='date'
                className='input'
                value={newDate}
                onChange={e => handleDateChange(e)}
                required
              />
            </div>

            {/* {availableTimes && ( */}
            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select
                id='book-time'
                className='book-time input'
                value={newTimes}
                onChange={e => setNewTimes(e.target.value)}
                required
              >
                <option>Select a Time</option>
                {props.availableTimes?.availableTimes?.map(newTime => (
                  <option key={newTime}>{newTime}</option>
                ))}
              </select>
            </div>
            {/* )} */}

            <div>
              <label htmlFor='book-guest'>Number of Guests:</label>
              <input
                id='book-guest'
                type='number'
                value={newGuest}
                placeholder='1'
                min='1'
                max='10'
                onChange={e => setNewGuest(e.target.value)}
                className='book-guest input'
              />
            </div>

            <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select
                id='book-occasion'
                className='input'
                key={newOccasion}
                value={newOccasion}
                onChange={e => setNewOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div className='submit-btn'>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <input
                  aria-label='On Click'
                  type='submit'
                  value={"Make Your Reservation"}
                  className='btn'
                />
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
