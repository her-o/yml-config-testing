import React from "react";
import Navigate from "./Navigate";

function PageThree(props) {
  return (
    <React.Fragment>
      <h1>Page 3 {props.name}</h1> <Navigate></Navigate>
      <hr />
    </React.Fragment>
  );
}

export default PageThree;
