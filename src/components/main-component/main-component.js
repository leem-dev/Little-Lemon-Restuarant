import React from "react";
import {Routes, Route } from "react-router-dom";
import HomePage from "../../routes/homepage-element/homepage-element";
import BookingPage from "../../routes/booking-element/booking-element";

const Main = () =>  {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />}/>
            </Routes>
        </>
    )
}

export default Main;