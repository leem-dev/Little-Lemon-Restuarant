import React from "react";
import { render } from "@testing-library/react";
import Main from "../main-component/main-component";

// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Main Component", () => {
  test("initializeTimes function returns expected value", () => {
    const { result } = render(<Main />);

    // Access the state after rendering
    const { availableTimes } = result.current.state;

    // Adjust this assertion based on the actual expected value from fetchAPI
    expect(availableTimes).toEqual(["17:00", "17:30" /* ... other expected values ... */]);
  });

  test("updateTimes function returns the same value as provided in the state", () => {
    const { result } = render(<Main />);
    const { state, dispatch } = result.current;

    // Call updateTimes with the current state
    const updatedState = state.reducer(state, dispatch, state);

    // Assert that the availableTimes property remains the same
    expect(updatedState.availableTimes).toEqual(state.availableTimes);
  });
});
