import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm component", () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  const { getByText, getByLabelText } = render(
    <BookingForm
      submitForm={mockSubmitForm}
      dispatch={mockDispatch}
      availableTimes={{ availableTimes: ["10:00 AM", "11:00 AM"] }}
    />
  );

  const headerElement = getByText(/Table Booking/i);
  const dateInput = getByLabelText(/Choose Date/i);
  const timeSelect = getByLabelText(/Choose Time/i);
  const guestInput = getByLabelText(/Number of Guests/i);
  const occasionSelect = getByLabelText(/Occasion/i);
  const submitButton = getByText(/Make Your Reservation/i);

  expect(headerElement).toBeInTheDocument();

  // Test form interaction (you can customize these based on your form)
  fireEvent.change(dateInput, { target: { value: "2022-02-22" } });
  fireEvent.change(timeSelect, { target: { value: "10:00 AM" } });
  fireEvent.change(guestInput, { target: { value: "5" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  fireEvent.click(submitButton);

  // Assertions based on your application logic
  expect(mockSubmitForm).toHaveBeenCalledWith(/* expected form data */);
  expect(mockDispatch).toHaveBeenCalledWith(/* expected dispatch data */);
});
