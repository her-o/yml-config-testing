import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Disney from "./examples/Disney";
import Fruits from "./examples/Fruits";
import InternalClock from "./examples/InternalClock";
import Functional from "./examples/Functional";
import OfClass from "./examples/OfClass";
import { getPing } from "./services/carService";
function App() {
  const [state, setState] = useState({
    currentUser: {
      firstName: "Michael",
      lastName: "Mouse",
      friends: [{ name: "Minnie" }, { name: "Donald" }, { name: "Pluto" }],
    },
  });

  useEffect(() => {
    getPing();
  }, []);

  const changeLastName = () => {
    setState((prevState) => {
      const currentUser = { ...prevState.currentUser };
      currentUser.lastName = "Olmos";
      return { currentUser };
    });
  };

  const removeFriends = () => {
    setState((prevState) => {
      const currentUser = { ...prevState.currentUser };
      currentUser.friends = [];
      return { currentUser };
    });
  };

  const sayHello = () => {};

  return (
    <div className="App">
      <header className="App-header">
        2
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello world I love code</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="row">
          <div className="col-6">
            <h5>Of class</h5>
            <div>
              <OfClass />
            </div>
          </div>
          <div className="col-6">
            <h5>Functional</h5>
            <div>
              <Functional />
            </div>
          </div>
        </div>
        <InternalClock />
        <Fruits />
        <Disney friend={state.currentUser} showGreeting={sayHello} />
        <button className="btn" onClick={changeLastName}>
          Change last name
        </button>
        <button onClick={removeFriends}>Remove All Friends</button>
      </header>
    </div>
  );
}

export default App;
