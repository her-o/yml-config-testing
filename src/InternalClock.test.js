import React from "react";
import {cleanup, render} from "@testing-library/react";
import InternalClock from "./examples/InternalClock";

describe("InternalClock.jsx", ()=> {

    afterEach(()=> {
        cleanup();
    });

    it("React clock is imported and rendered", ()=> {
        const {container} = render(<InternalClock/>);
        const clock = container.getElementsByClassName("react-clock")[0];
        expect(clock).toBeTruthy();
    });
    it("React clock should have a prop for value", ()=> {
        const {container} = render(<InternalClock/>);
        const clock = container.getElementsByClassName("react-clock")[0];
        let date;
        for(let [key, value] of Object.entries(clock)) {
            if(key.includes("reactProps")) {
                date = value.dateTime;
            }
        }
        expect(date).toBeTruthy();
    });


    it("React clock should have a prop for renderNumbers", ()=> {
        const {container} = render(<InternalClock/>);
        const clock = container.getElementsByClassName("react-clock")[0];
        let renderNumbers;
        for(let [key, value] of Object.entries(clock)) {
            if(key.includes("reactProps")) {
                renderNumbers = value.children[0]._owner.memoizedProps.renderNumbers;
            }
        }
        expect(renderNumbers).toBeTruthy();
    });
});
