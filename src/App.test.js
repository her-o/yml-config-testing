import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App.jsx", () => {
  it("App renders without crashing", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it(`Contains the text "hello world I love code"`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const iLoveCode = screen.getByText(/hello world i love code/i);
    expect(iLoveCode).toBeTruthy();
  });

  it("React clock is imported and rendered.", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const clock = container.getElementsByClassName("react-clock");
    expect(clock).toBeTruthy();
  });
});
