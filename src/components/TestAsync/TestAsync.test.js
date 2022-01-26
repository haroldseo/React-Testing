import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TestAsync from "./TestAsync";

afterEach(cleanup);

it("increments counter after 0.5s", async () => {
  render(<TestAsync />);
  fireEvent.click(screen.getByTestId("button-up"));
  const counter = await screen.findByText("1");
  expect(counter).toHaveTextContent("1");
});
