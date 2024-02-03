import React from "react";
import { render, screen } from "@testing-library/react";
import { initializeTimes } from "../main-component/main-component";
import fetchAPI from "../main-component/main-component";
import { updateTimes } from "../main-component/main-component";
import Main from "../../components/main-component/main-component";
import "@testing-library/jest-dom/extend-expect";
import { myFetchAPI } from "../../path/to/api";

describe("Main Component", () => {
  it("initializes available times correctly", async () => {
    render(<Main />);

    expect(screen.getByTestId("main-component")).toBeInTheDocument();
    expect(await initializeTimes()).toEqual({ availableTimes: [] }); // Mock the expected initial value
  });

  it("returns the correct expected value for updateTimes", async () => {
    const currentDate = new Date();
    const currentState = { availableTimes: [] };
    const expectedValue = { availableTimes: ["10:00", "11:00", "12:00"] }; // Mock the expected value

    myFetchAPI.mockResolvedValueOnce(["10:00", "11:00", "12:00"]); // Mock the API response

    expect(await updateTimes(currentState, currentDate)).toEqual(expectedValue);
  });
  // it("initializes available times correctly", () => {
  //   render(<Main />);

  //   expect(screen.getByTestId("main-component")).toBeInTheDocument();
  //   expect(screen.getByTestId("available-times")).toBeInTheDocument();
  // });

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
