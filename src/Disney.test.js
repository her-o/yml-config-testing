import { cleanup, render, screen } from "@testing-library/react";
import Disney from "./examples/Disney";

describe("Disney - Passing State & Functions To Children", () => {
  const mockFn = jest.fn();
  const mockUser = {
    firstName: "Michael" + new Date().getSeconds(),
    lastName: "Mouse",
    friends: [{ name: "Minnie" }, { name: "Donald" }, { name: "Pluto" }],
  };

  beforeEach(() => {
    render(<Disney showGreeting={mockFn} friend={mockUser} />);
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("Disney component exists and it renders without crashing", () => {});

  it("The friend prop is passed from App.jsx to Disney.jsx.", () => {
    const firstName = screen.getByText(mockUser.firstName);
    const lastName = screen.getByText(/mouse/i);

    expect(firstName).toBeTruthy();
    expect(lastName).toBeTruthy();
  });

  it("Disney component displays count of friends of 3", () => {
    const countOfFriends = screen.getByText(/count of friends: 3/i);

    expect(countOfFriends).toBeTruthy();
  });

  it("The WelcomeMessage component is rendered within the Disney component.", () => {
    // do props test
  });

  it("The WelcomeMessage component accepts the prop 'end' with the value 'Goodbye'", () => {
    const end = screen.getByText(/goodbye/i);
    expect(end).toBeTruthy();
  });

  it("Disney component receives function from parent component using props and invokes it", () => {
    expect(mockFn).toBeCalledTimes(1);
  });
});
