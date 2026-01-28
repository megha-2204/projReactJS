import React from "react";

function App() {
    return <h1>To do</h1>
}

export const Todo = () => {
    return (
        <React.Fragment>
            <h1>Hi Hello</h1>
            <button>Choose or pick</button>
        </React.Fragment>
    );
}

export const CreateTodo = () => {
    const tasks01 = 0;
    return (
      <>
          <h1>Tasks: {tasks01}</h1>
          <button>Start</button>
      </>
    );
}

export const CreateTodo01 = () => {
    const tasks01 = 0;
    const returnTasks = () => {
        return tasks01;
    }
    return (
        <>
            <h1>Tasks: {returnTasks()}</h1>
            <button>Start</button>
        </>
    );
}

export const CreateTodo02 = () => {
    const tasks01 = 5;
    const returnTasks = () => {
        if(tasks01==0){
            return "No task available";
        }else{
            return `${tasks01}`;
        }
    };
    return (
        <>
            <h2>Tasks: {returnTasks()}</h2>
            <button>Start</button>
        </>
    );
}


export const ElementAttribute = () => {
    const hideTask = false;
    const styles = {
         backgroundColor: "red"
    }
    return (
        <React.Fragment>
            <h2 style={styles}>Element Attribute!!!</h2>
            <button style={{backgroundColor:"pink"}} className = 'btn' disabled = {hideTask} value = 'Add task button'>Tasks present</button>
        </React.Fragment>
    );
}


export default App;


//EXPORT AND IMPORT CONCEPT
//for export default, you can present without curly braces in the main.jsx
//else you have to put curly braces

//VARIABLE FETCHING CONCEPT
//when you want to fetch the value from the variable, use `${var_name}`

