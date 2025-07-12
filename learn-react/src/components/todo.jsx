import React from "react";

// function Todo(){
//     return <h1>To do lsit</h1>;
// }

const Todo = () => {
  const task = 0;
  const hideButton = true;
  const styles = {
    backgroundColor: "grey",
  };
  const countTask = () => {
    // if (task == 0) {
    //   return "No tasks available";
    // } else {
    //   return `Tasks: ${task}`;
    // }
    return task == 0 ? "No tasks available" : `Task available: ${task}`;
  };
  return (
    <React.Fragment>
      <h1 style={styles}>Create to do lists</h1>
      <p>Created lists: {countTask()}</p>
      <button disabled={hideButton} value="AddTaskButton">
        Add new todo
      </button>
    </React.Fragment>
  );
};
export default Todo;
