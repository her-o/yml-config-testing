import React from "react";
import WelcomeMessage from "./WelcomeMessage";

const Disney = (props) => {
 props.showGreeting();
  return (
    <div>
      <span>{props.friend.firstName}</span>
      <span>{props.friend.lastName}</span>
      <p>Count of Friends: {props.friend.friends.length}</p>
      <WelcomeMessage end={"Goodbye"}/>
    </div>
  );
};

export default React.memo(Disney);
