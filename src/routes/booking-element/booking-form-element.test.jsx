import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "../booking-element/booking-form-element"; // Adjust the import path based on your project structure

// Mock the functions passed as props
const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();

const mockProps = {
  submitForm: mockSubmitForm,
  dispatch: mockDispatch,
  availableTimes: {
    availableTimes: ["10:00", "12:30", "15:00"],
  },
};

describe("BookingForm", () => {
  it("renders the form with the correct elements", () => {
    const { getByLabelText, getByText } = render(<BookingForm {...mockProps} />);

    // Assert the existence of form elements
    expect(getByLabelText("Choose Date:")).toBeInTheDocument();
    expect(getByLabelText("Choose Time:")).toBeInTheDocument();
    expect(getByLabelText("Number of Guests:")).toBeInTheDocument();
    expect(getByLabelText("Occasion:")).toBeInTheDocument();
    expect(getByText("Make Your Reservation")).toBeInTheDocument();
  });

  it("calls dispatch on date change", () => {
    const { getByLabelText } = render(<BookingForm {...mockProps} />);

    // Simulate a date change
    fireEvent.change(getByLabelText("Choose Date:"), { target: { value: "2022-12-01" } });

    // Assert that dispatch is called with the correct arguments
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "2022-12-01" }),
      })
    );
  });

  it("calls submitForm on form submission", () => {
    const { getByLabelText, getByText } = render(<BookingForm {...mockProps} />);

    // Simulate a form submission
    fireEvent.submit(getByText("Make Your Reservation"));

    // Assert that submitForm is called
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
