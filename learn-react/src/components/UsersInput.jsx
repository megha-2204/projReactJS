import React, { useState } from "react";

const UsersInput = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task1", "Task2", "Task3"];

  const handleChange = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <React.Fragment>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick} value="Add tasks button">
        Add task
      </button>
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default UsersInput;
