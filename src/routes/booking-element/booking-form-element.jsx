import { useState, useEffect } from "react";
import "./booking-element-styles.css";
import { myFetchAPI, mySubmitAPI } from "../../path/to/api";

const BookingForm = props => {
  const availableTimesByDate = {
    "2024-02-02": ["10:00", "11:00", "12:00"],
    "2024-02-03": ["10:00", "11:00", "12:00"],
    "2024-02-04": ["14:00", "15:00", "16:00"],
    "2024-02-05": ["10:00", "11:00", "12:00"],
    "2024-02-06": ["14:00", "15:00", "16:00"],
    "2024-02-07": ["10:00", "11:00", "12:00"],
    "2024-02-08": ["14:00", "15:00", "16:00"],
    "2024-02-09": ["10:00", "11:00", "12:00"],
    "2024-02-10": ["14:00", "15:00", "16:00"],
    "2024-02-11": ["10:00", "11:00", "12:00"],
    "2024-02-12": ["14:00", "15:00", "16:00"],
    "2024-02-13": ["10:00", "11:00", "12:00"],
    "2024-02-14": ["14:00", "15:00", "16:00"],
    "2024-02-15": ["10:00", "11:00", "12:00"],
    "2024-02-16": ["14:00", "15:00", "16:00"],
    "2024-02-17": ["10:00", "11:00", "12:00"],
    "2024-02-18": ["14:00", "15:00", "16:00"],
    "2024-02-19": ["10:00", "11:00", "12:00"],
    "2024-02-20": ["14:00", "15:00", "16:00"],
    "2024-02-21": ["10:00", "11:00", "12:00"],
    "2024-02-22": ["14:00", "15:00", "16:00"],
  };

  const [newDate, setNewDate] = useState("");
  const [newTimes, setNewTimes] = useState("");
  const [newGuest, setNewGuest] = useState("");
  const [newOccasion, setNewOccasion] = useState("");
  const [selectTime, setSelectedTime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleGuestLength = e => {
    setNewGuest(e.target.value);
  };

  const handleFormSubmission = e => {
    e.preventDefault();

    props.submitForm({
      date: newDate,
      time: newTimes,
      guest: newGuest,
      occasion: newOccasion,
    });
  };

  const handleDateChange = (e, date) => {
    setNewDate(e.target.value);
    props.dispatch(e);
    setSelectedTime(availableTimesByDate[e.target.value]);

    myFetchAPI(date)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    validateBookingForm();
  };

  const validateBookingForm = () => {
    const isFormValid = newDate !== "" && newTimes !== "" && newGuest !== "" && newOccasion !== "";
    setFormValid(isFormValid);
  };

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const availableTimes = await props.fetchAPI(newDate);
        setNewTimes(availableTimes.length > 0 ? availableTimes[0] : "");
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };

    validateBookingForm();

    if (newDate) fetchAvailableTimes();
  }, [newDate, newGuest, newTimes, newOccasion]);

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
                {selectTime?.map(newTime => (
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
                onChange={handleGuestLength}
                className='book-guest input'
                required
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
                required
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
                  disabled={!formValid}
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
