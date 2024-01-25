import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { getByTestId } = render(<App />);

  const headerElement = getByTestId("header-component");
  const mainElement = getByTestId("main-component");
  const footerElement = getByTestId("footer-component");

  expect(headerElement).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
