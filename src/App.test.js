import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Table Booking/i);
  expect(headerElement).toBeInTheDocument();
});
