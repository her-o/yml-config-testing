import React from "react";

class OfClass extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 30,
    };
  }

  onClick = () => {
    this.setState((prevState)=> {
        const age = prevState.age + 1;
        return {age};
    });
 }

  render() {
    return (
      <div>
        {this.state.age}
        <button onClick={this.onClick}>Command 1</button>
      </div>
    );
  }
}

export default React.memo(OfClass);
