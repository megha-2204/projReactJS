import React, { useState } from "react";

const Hooks = () => {
  //   const countArr = useState(0);
  //   const count = countArr[0];
  //   const setCount = countArr[1];
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //tasks++;
    setCount(count + 1);
    console.log("Add task", count);
  };
  return (
    <React.Fragment>
      <h1>Tasks: {count}</h1>
      <button onClick={handleClick} value="Add tasks button">
        Add task
      </button>
    </React.Fragment>
  );
};
export default Hooks;
