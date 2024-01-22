import { useState } from "react";
import "./booking-element-styles.css"

const BookingForm = (props) =>   {

    const [newDate, setNewDate] = useState("");
    const [newTimes, setNewTimes] = useState("");
    const [newGuest, setNewGuest] = useState("");
    const [newOccasion, setNewOccasion] = useState("");

    const handleFormSubmission = (e) =>  {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleDateChange = (e) => {
        setNewDate(e);
        props.dispatch(e);
    }

    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
    }
    return (
        <div className="form-box">
            <form onSubmit={handleFormSubmission} style={formStyle}>
                <fieldset>
                    <div>
                        <label htmlFor="book-date">Choose Date:</label>
                        <input type="date" value={newDate} onChange={(e) => handleDateChange(e)} required/>
                    </div>

                    <div>
                        <label htmlFor="book-time">Choose Time:</label>
                        <select className="book-time" value={newTimes} onChange={(e) => setNewTimes(e.target.value)} required>
                            <option>Select a Time</option>
                            {
                                props.availNewTimes.availNewTimes.map(newTime =>    {
                                    return <option key={newTime}>{newTime}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="book-guest">Number of Guests:</label>
                        <input type="number" value={newGuest} placeholder="1" min="1" max="10" onChange={(e) => setNewGuest(e.target.value)} className="book-guest" required/>
                    </div>

                    <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select key={newOccasion} value={newOccasion} onChange={(e) => setNewOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <div className="submit-btn">
                        <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm;