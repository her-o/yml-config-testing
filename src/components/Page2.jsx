import React from "react";
import Navigate from "./Navigate";

function PageTwo(props) {
  return (
    <React.Fragment>
      <h1>Page 2 {props.name}</h1> <Navigate></Navigate>
      <hr />
    </React.Fragment>
  );
}

export default PageTwo;
