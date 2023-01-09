import React from "react";
import { render, screen, cleanup, fireEvent,  } from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import App from "./App";

describe("Using Router Routes to Change Content/Views", () => {
  afterEach(() => {
    cleanup();
  });
  it("App.jsx imports Home.jsx as a child component and has a default route for the Home.jsx component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const home = screen.getByText(/home/i);
    expect(home).toBeTruthy();
  });

  it("App.jsx has a route for the Page1.jsx component", () => {
    render(
      <MemoryRouter initialEntries={["/page1"]}>
        <App />
      </MemoryRouter>
    );

    const page1 = screen.getByRole("heading", { level: 1, name: /page 1/i });
    expect(page1).toBeTruthy();
  });

  it("App.jsx has a route for the Page2.jsx component", () => {
    render(
      <MemoryRouter initialEntries={["/page2"]}>
        <App />
      </MemoryRouter>
    );

    const page2 = screen.getByRole("heading", { level: 1, name: /page 2/i });
    expect(page2).toBeTruthy();
  });

  it("App.jsx has a route for the Page3.jsx component", () => {
    render(
      <MemoryRouter initialEntries={["/page3"]}>
        <App />
      </MemoryRouter>
    );

    const page3 = screen.getByRole("heading", { level: 1, name: /page 3/i });
    expect(page3).toBeTruthy();
  });
});

describe("Using useNavigate React Router Hook", () => {
  afterEach(() => {
    cleanup();
  });

  it("'Go to Page 1' button exists", () => {
    render(
      <MemoryRouter initialEntries={["/page1"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage1 = screen.getByRole("button", {
      name: /go to page 1/i,
    });

    expect(goToPage1).toBeTruthy();
  });

  it("Go to page 1 button has an event handler", ()=> {
    render(
      <MemoryRouter initialEntries={["/page1"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage1 = screen.getByRole("button", {
      name: /go to page 1/i,
    });

    let onClick;

    for(let [key, value] of Object.entries(goToPage1)) {
      if(key.includes("reactProps")) {
        onClick = value.onClick;
      }
    }
    expect(onClick).toBeTruthy();
  });

  it("'Go to Page 2' button exists", () => {
    render(
      <MemoryRouter initialEntries={["/page2"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage2 = screen.getByRole("button", {
      name: /go to page 2/i,
    });

    expect(goToPage2).toBeTruthy();
  });

  it("Go to page 2 button has an event handler", ()=> {
    render(
      <MemoryRouter initialEntries={["/page2"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage2= screen.getByRole("button", {
      name: /go to page 2/i,
    });

    let onClick;

    for(let [key, value] of Object.entries(goToPage2)) {
      if(key.includes("reactProps")) {
        onClick = value.onClick;
      }
    }
    expect(onClick).toBeTruthy();
  });

  it("'Go to Page 3' button exists", () => {
    render(
      <MemoryRouter initialEntries={["/page3"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage3 = screen.getByRole("button", {
      name: /go to page 3/i,
    });

    expect(goToPage3).toBeTruthy();
  });

  it("Go to page 3 button has an event handler", ()=> {
    render(
      <MemoryRouter initialEntries={["/page3"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage3= screen.getByRole("button", {
      name: /go to page 3/i,
    });

    let onClick;

    for(let [key, value] of Object.entries(goToPage3)) {
      if(key.includes("reactProps")) {
        onClick = value.onClick;
      }
    }
    expect(onClick).toBeTruthy();
  });

  it("Clicking the 'Go to Page 1' button should navigate you to Page 1", () => {
    render(
      <MemoryRouter initialEntries={["/page3"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage1 = screen.getByRole("button", {
      name: /go to page 1/i,
    });

    let page1 = screen.queryByRole("heading", { level: 1, name: /page 1/i });
    expect(page1).toBeFalsy();

    fireEvent.click(goToPage1);

    page1 = screen.getByRole("heading", { level: 1, name: /page 1/i });
    expect(page1).toBeTruthy();
  });

  it("Clicking the 'Go to Page 2' button should navigate you to Page 2", () => {
    render(
      <MemoryRouter initialEntries={["/page1"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage2 = screen.getByRole("button", {
      name: /go to page 2/i,
    });

    let page2 = screen.queryByRole("heading", { level: 1, name: /page 2/i });
    expect(page2).toBeFalsy();

    fireEvent.click(goToPage2);

    page2 = screen.getByRole("heading", { level: 1, name: /page 2/i });
    expect(page2).toBeTruthy();
  });

  it("Clicking the 'Go to Page 3' button should navigate you to Page 3", () => {
    render(
      <MemoryRouter initialEntries={["/page1"]}>
        <App />
      </MemoryRouter>
    );
    const goToPage3 = screen.getByRole("button", {
      name: /go to page 3/i,
    });

    let page3 = screen.queryByRole("heading", { level: 1, name: /page 3/i });
    expect(page3).toBeFalsy();

    fireEvent.click(goToPage3);

    page3 = screen.getByRole("heading", { level: 1, name: /page 3/i });
    expect(page3).toBeTruthy();
  });
});

describe("React router useParamsHook", ()=> {

    beforeEach(()=> {
        const any = 1;
        render(
            <MemoryRouter initialEntries={[`/products/${any}`]}>
              <App />
            </MemoryRouter>
          );
    });

    afterEach(()=> {
        cleanup();
    });
    
    it("Has a Route for Products that can accommodate children", ()=> {
        const goToProduct = screen.getByRole("button", {name: "Go to Product 100"});

        expect(goToProduct).toBeTruthy();
    });

    it("Go to Product 900 should navigate to url product/900 and display the number on the screen", ()=> {
       const goToProduct = screen.getByRole("button", {name: "Go to Product 900"});
       fireEvent.click(goToProduct);
       const product900 = screen.getByRole("heading", {level: 1, name: /Router: 900/i});
       expect(product900).toBeTruthy();
       
    });

    
    it("Go to Product 800 should navigate to url product/800 and display the number on the screen", ()=> {
        const goToProduct = screen.getByRole("button", {name: "Go to Product 800"});
        fireEvent.click(goToProduct);
        const product800 = screen.getByRole("heading", {level: 1, name: /Router: 800/i});
        expect(product800).toBeTruthy();
        
     });

     it("Go to Product 100 should navigate to url product/100 and display the number on the screen", ()=> {
        const goToProduct = screen.getByRole("button", {name: "Go to Product 100"});
        fireEvent.click(goToProduct);
        const product100 = screen.getByRole("heading", {level: 1, name: /Router: 100/i});
        expect(product100).toBeTruthy();
        
     });

     it("Clicking the 'New Product' link should navigate to the url /products/new", ()=> {
        cleanup();
        render(
            <MemoryRouter  initialEntries={[`/`]}>
              <App />
            </MemoryRouter>
          );
          let product = screen.queryByRole("heading", {level: 1, name: /Router: /i});
          expect(product).toBeFalsy();

          const newProduct = screen.getByRole("link", {name: /new product/i});
          fireEvent.click(newProduct);

          product = screen.getByRole("heading", {level: 1, name: /Router:/i});
          expect(product).toBeTruthy();
          
     });
});
