import React from "react";

const Events = () => {
  let tasks = 0;
  const handleClick = () => {
    tasks++;
    console.log("Add task", tasks);
  };
  return (
    <React.Fragment>
      <h1>Tasks: {tasks}</h1>
      <button onClick={handleClick} value="Add tasks button">
        Add task
      </button>
    </React.Fragment>
  );
};
export default Events;
