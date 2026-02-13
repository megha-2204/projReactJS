import React, { useState } from "react";
import "./TaskForm.css"
import Tag from "./Tag.jsx";

const TaskForm = () => {
    // const [task, setTask] = useState("");
    // const [status, setStatus] = useState("todo");
    //
    // const handleTask = (e) => {
    //     setTask(e.target.value)
    // };
    // const handleStatus = (e) => {
    //     setStatus(e.target.value)
    // };
    // console.log(task);
    // console.log(status);

    const [taskData, setTaskData] = useState({
        task: " ",
        status: "todo"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData)
    };

    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        //console.log(name,value);
        setTaskData(prev => {
            return{...prev, [name]:value}
        });
    };

    return(
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type="text" className="task_input" placeholder="Enter your task"
                    name = "task" onChange={(e) => handleChange(e)}
                />
                <div className="task_form_bottom_line">
                    <div>
                        <Tag tagName = "HTML"/>
                        <Tag tagName = "CSS"/>
                        <Tag tagName = "JAVASCRIPT"/>
                        <Tag tagName = "REACT" />
                    </div>
                    <div>
                    <select className="task_status" name = "status" onChange={(e)=>{handleChange(e)}}>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type="submit" className="task_submit"> +Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    );
}

export default TaskForm;