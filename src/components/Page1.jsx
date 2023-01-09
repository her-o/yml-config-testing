import React from "react";
import Navigate from "./Navigate";
function PageOne(props) {
  return (
    <React.Fragment>
      <h1>Page 1 says {props.name}</h1>
      <Navigate></Navigate>
      <hr />
    </React.Fragment>
  );
}

export default PageOne;
