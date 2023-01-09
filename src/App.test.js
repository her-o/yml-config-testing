import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.jsx", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("App renders without crashing", () => {
    const {container } = render(<App/>);
    expect(container).toBeTruthy();
  });

  it(`Contains the text "hello world I love code"`, () => {
    const iLoveCode = screen.getByText(/hello world i love code/i);    
    expect(iLoveCode).toBeTruthy();
  });

  it("React clock is imported and rendered.", ()=> {
    const {container} = render(<App/>);
    const clock = container.getElementsByClassName("react-clock");
    expect(clock).toBeTruthy();
  })
});
