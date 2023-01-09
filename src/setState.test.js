import React from "react";
import { cleanup, fireEvent, render} from "@testing-library/react";
import Functional from "./examples/Functional";
import OfClass from "./examples/OfClass";

describe("setState: Using useState to change state - Basic", ()=> {
    
    afterEach(()=> {
        cleanup();
    })

    it("Functional.jsx renders without crashing", ()=> {
        render(<Functional/>);
    });
    it("OfClass.jsx renders without crashing", ()=> {
        render(<OfClass/>);
    });

    it("The age property in the Functional.jsx component's state is rendered on the page",()=> {
        const {getByText} = render(<Functional/>);
        const age = getByText("30");
        expect(age).toBeTruthy();
    });

    it("The age property in the OfClass.jsx component's state is rendered on the page",()=> {
        const {getByText} = render(<OfClass/>);
        const age = getByText("30");
        expect(age).toBeTruthy();
    });

    it("Functional.jsx component has a 'Command 1' button", ()=> {
        const {getByRole} = render(<Functional/>);
        const button = getByRole("button", {
            name: /command 1/i
        });
        expect(button).toBeTruthy();
    });

    it("Functional.jsx component's 'Command 1' button includes the onClick handler 'onClickOne'", ()=> {
        const {getByRole} = render(<Functional/>);
        const button = getByRole("button", {
            name: /command 1/i
        });
        let onClick;
        for(let [key,value] of Object.entries(button)) {
            if(key.includes("reactProps")) {
                onClick = value.onClick;
            }
        }

        expect(onClick).toBeTruthy();
    });

    it("OfClass.jsx component has a 'Command 1' button", ()=> {
        const {getByRole} = render(<OfClass/>);
        const button = getByRole("button", {
            name: /command 1/i
        });
        expect(button).toBeTruthy();
    });

    
    it("Functional.jsx component's 'Command 1' button includes the onClick handler 'onClickOne'", ()=> {
        const {getByRole} = render(<OfClass/>);
        const button = getByRole("button", {
            name: /command 1/i
        });
        let onClick;
        for(let [key,value] of Object.entries(button)) {
            if(key.includes("reactProps")) {
                onClick = value.onClick;
            }
        }

        expect(onClick).toBeTruthy();
    });

    it("On click of Functional.jsx's 'Command 1' button should increment age by 1", ()=> {
        const {getByText, getByRole, queryByText} = render(<Functional/>);

        var age = getByText("30");
        expect(age).toBeTruthy();

        const button = getByRole("button", {
            name: /command 1/i
        });
        fireEvent.click(button);

        age = queryByText("30");
        const incrementedAge = getByText("31");

        expect(age).toBeFalsy();
        expect (incrementedAge).toBeTruthy()
    });

    it("On click of OfClass.jsx's 'Command 1' button should increment age by 1", ()=> {
        const {getByText, getByRole, queryByText} = render(<OfClass/>);

        var age = getByText("30");
        expect(age).toBeTruthy();

        const button = getByRole("button", {
            name: /command 1/i
        });
        fireEvent.click(button);

        age = queryByText("30");
        const incrementedAge = getByText("31");

        expect(age).toBeFalsy();
        expect (incrementedAge).toBeTruthy()
    });
});