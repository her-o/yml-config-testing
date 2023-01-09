import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

describe("Third-Party Modules - Installing & Importing", ()=> {
    it("The React Clock is imported and rendered",()=> {
        const {container} = render(<App/>);
        const clock = container.getElementsByClassName("react-clock");
        expect(clock).toBeTruthy();
    });
    it("The Clock component has a property for value that equals new Date()",()=> {
        const {container} = render(<App/>);
        const clock = container.getElementsByClassName("react-clock")[0];
        let date;
        for(let [key, value] of Object.entries(clock)) {
            if(key.includes("reactProps")) {
                date = value.dateTime;
            }
        }
        expect(date).toBeTruthy();
    });
    it("The Clock component has a property for size that equals 350",()=> {
        const {container} = render(<App/>);
        const clock = container.getElementsByClassName("react-clock")[0];
        let size;
        for(let [key, value] of Object.entries(clock)) {
            if(key.includes("reactProps")) {
                size = value.style.width;
            }
        }
        expect(size).toEqual("350px");
    });
    it("The Clock component has a property for renderNumbers that equals true",()=> {
        const {container} = render(<App/>);
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