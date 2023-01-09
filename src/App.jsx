import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Disney from "./examples/Disney";
import Fruits from "./examples/Fruits";
import InternalClock from "./examples/InternalClock";
import Functional from "./examples/Functional";
import OfClass from "./examples/OfClass";
import { getPing } from "./services/carService";
import Home from "./components/Home";
import PageOne from "./components/Page1";
import PageTwo from "./components/Page2";
import PageThree from "./components/Page3";
import Product from "./components/Product";
import CustomForm from "./components/CustomForm";
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
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg  bg-light"
        aria-label="Eighth navbar example"
      >
        <div className="container">
          <Link to="/" className="navbar-brand btn btn-outline-primar">
            Client Side Routing
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/page1"
                  className="nav-link active btn-link btn "
                  aria-current="page"
                >
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page2" className="nav-link active btn-link btn ">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Page3" className="nav-link active btn-link btn ">
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products/new"
                  className="nav-link active btn-link btn "
                >
                  New Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container ">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/page1" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page3" element={<PageThree />} />
          <Route path="/products/*" element={<Product />}>
            <Route path=":productId" element={<Product />} />
            <Route path="new" element={<Product />} />
          </Route>
        </Routes>
        <CustomForm />
      </div>
      <div className="App">
        <header className="App-header">
          2
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello world I love code</p>
          <p>Learn React</p>
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
    </React.Fragment>
  );
}

export default App;
