import React from "react";
import { Add } from "./add";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("examples/react: renders add component correctly", () => {
  render(<Add a={3} b={4} />);
  expect(screen.queryByText("7")).toBeInTheDocument();
});
