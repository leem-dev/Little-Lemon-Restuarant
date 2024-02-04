import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import BookingForm from "../booking-element/booking-form-element"; // Adjust the import path based on your project structure
import { myFetchAPI } from "../../path/to/api";

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

  it("applies HTML5 validation attributes", async () => {
    render(<BookingForm fetch={myFetchAPI} />);

    const dateInput = screen.getByLabelText("Choose Date:");
    const timeInput = screen.getByLabelText("Choose Time:");
    const guestInput = screen.getByLabelText("Number of Guests:");
    const occasionInput = screen.getByLabelText("Occasion:");

    expect(dateInput).toHaveAttribute("required");
    expect(timeInput).toHaveAttribute("required");
    expect(guestInput).toHaveAttribute("required");
    expect(occasionInput).toHaveAttribute("required");
  });
});
