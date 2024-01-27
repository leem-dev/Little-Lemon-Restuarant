import React from "react";
import { render, screen } from "@testing-library/react";
import { initializeTimes } from "../main-component/main-component";
import fetchAPI from "../main-component/main-component";
import { updateTimes } from "../main-component/main-component";
import Main from "../../components/main-component/main-component";
import "@testing-library/jest-dom/extend-expect";

describe("Main Component", () => {
  it("initializes available times correctly", () => {
    render(<Main />);

    expect(screen.getByTestId("main-component")).toBeInTheDocument();
    expect(screen.getByTestId("available-times")).toBeInTheDocument(); // Adjust based on your actual component structure
  });

  it("returns the correct expected value", () => {
    const currentDate = new Date();
    const expectedValue = { availableTimes: fetchAPI(currentDate) };
    expect(initializeTimes).toEqual(expectedValue);
  });

  it("returns the same value provided in the state", () => {
    const currentDate = new Date();
    const currentState = { availableTimes: fetchAPI(currentDate) };
    const expectedValue = { availableTimes: fetchAPI(currentDate) };
    expect(updateTimes(currentState, currentDate)).toEqual(expectedValue);
  });
});
