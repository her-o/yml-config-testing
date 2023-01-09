import React from "react";
import { useState } from "react";

const Functional = () => {
    const [state, setState] = useState({
        age: 30
    });
    
    const onClick = () => {
        setState((prevState)=> {
            const age = prevState.age + 1;
            return {age};
        });
    }
    return (
    <div>
        {state.age}
        <button onClick={onClick}>Command 1</button>
    </div>
    );
}

export default React.memo(Functional);