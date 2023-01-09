import React from "react";
import App from "./App";
import { render, screen, cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("React Forms - Binding State to Text Inputs", () => {
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

  it("Input for firstName exists on the form. HINT: does it have a label of 'First Name' with htmlFor property set to the name of the input ?", () => {
    const firstName = screen.getByLabelText(/first name/i);
    expect(firstName).toBeTruthy();
  });

  it("Input for lastName exists on the form. HINT: does it have a label of 'Last Name' with htmlFor property set to the name of the input ?", () => {
    const lastName = screen.getByLabelText(/last name/i);
    expect(lastName).toBeTruthy();
  });

  it("On change, the firstName input's value will update. HINT: Does your input have onChange and value properties?", async () => {
    const inputValue = "test first name" + new Date().getSeconds();
    const input = screen.getByLabelText(/first name/i);
    user.type(input, inputValue);
    const firstName = await screen.findByDisplayValue(inputValue);
    expect(firstName).toBeTruthy();
  });

  it("On change, the lastName input's value will update. HINT: Does your input have onChange and value properties?", async () => {
    const inputValue = "test last name" + new Date().getSeconds();
    const input = screen.getByLabelText(/last name/i);
    user.type(input, inputValue);
    const lastName = await screen.findByDisplayValue(inputValue);
    expect(lastName).toBeTruthy();
  });
});
