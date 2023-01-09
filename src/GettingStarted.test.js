import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Getting started with React Testing", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("'Learn React' is rendered on the page", () => {
    const learnReact = screen.getByText(/learn react/i);
    expect(learnReact).toBeTruthy();
  });

  it("The renderNumber function should return 1 + 1 and it should be invoked in the app header", () => {
    const result = screen.getAllByText("2")[0];
    expect(result).toBeTruthy();
  });
});
