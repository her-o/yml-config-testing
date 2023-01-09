import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import Fruits from "./examples/Fruits";
import InternalClock from "./examples/InternalClock";
import * as carService from "./services/carService";

describe("App-Part2.jsx", ()=> {

    afterEach(()=> {
        cleanup();
        jest.clearAllMocks();
    });

    it("App renders without crashing", ()=>{});

    it("getPing is called when App renders", ()=> {
        const getPing = jest.spyOn(carService, "getPing");
        render(<App/>)
        expect(getPing).toBeCalled();
    });
    //build clock tests off this
    it("InternalClock component is imported and rendered", () => {
        const {container} = render(<InternalClock/>);
        const clock = container.getElementsByClassName("react-clock");
        expect(clock).toBeTruthy();
      });

    it("Fruits component is imported and rendered", ()=> {
        render(<Fruits/>)
    });

    it("Contains the text Fruits are going to be here: 0`", ()=> {
        render(<App/>);
        const fruitsAreGoingToBeHere = screen.getByText(/Fruits are going to be here: 0/i);
        expect(fruitsAreGoingToBeHere).toBeTruthy();
    });


});