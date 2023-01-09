import React from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';


const InternalClock = () => {
    return (<div>

        <Clock value={new Date()} renderNumbers size={350}/>
    </div>
    );
}

export default InternalClock;