import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Disney - Task: Change State Using Click Handlers", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("App renders without crashing", () => {});

  it("The state of App.jsx should be changed: firstName should be 'Michael' and friends should include an entry for 'Goofy'", () => {
    //test with props trick
  });

  it("Change Last Name button exists", () => {
    const button = screen.getByRole("button", {
      name: /change last name/i,
    });

    expect(button).toBeTruthy();
  });

  it("Change Last Name' button includes an onClick handler", () => {
    const button = screen.getByRole("button", {
      name: /change last name/i,
    });
    let onClick;
    for (let [key, value] of Object.entries(button)) {
      if (key.includes("reactProps")) {
        onClick = value.onClick;
      }
    }
    expect(onClick).toBeTruthy();
  });

  it("Change last name button onClick changes currentUser's last name", () => {
    const button = screen.getByRole("button", {
      name: /change last name/i,
    });
    fireEvent.click(button);

    const michael = screen.queryByText(/Michael/i);
    expect(michael).toBeTruthy();

    const mouse = screen.queryByText(/Mouse/i);
    expect(mouse).toBeFalsy();
  });

  it("Remove All Friends button exists", () => {
    const button = screen.getByRole("button", {
      name: /remove all friends/i,
    });

    expect(button).toBeTruthy();
  });

  it("'Remove All Friends' button includes an onClick handler ", () => {
    const button = screen.getByRole("button", {
      name: /remove all friends/i,
    });
    let onClick;
    for (let [key, value] of Object.entries(button)) {
      if (key.includes("reactProps")) {
        onClick = value.onClick;
      }
    }
    expect(onClick).toBeTruthy();
  });

  it("Remove All Friends removes all of currentUser's friends", () => {
    const button = screen.getByRole("button", {
      name: /remove all friends/i,
    });
    fireEvent.click(button);

    const countOfFriends = screen.queryByText(/Count of Friends: 0/i);
    expect(countOfFriends).toBeTruthy();
  });
});
