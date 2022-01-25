import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TestEvents from "./TestEvents";

afterEach(cleanup);

it("increments counter", () => {
  render(<TestEvents />);
  fireEvent.click(screen.getByTestId("button-up"));
  expect(screen.getByTestId("counter")).toHaveTextContent(1);
});

it("decrements counter", () => {
  render(<TestEvents />);
  fireEvent.click(screen.getByTestId("button-down"));
  expect(screen.getByTestId("counter")).toHaveTextContent(-1);
});
