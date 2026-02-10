import React from "react";
import "./App.css"
import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";
import TodoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
    return(
        <div className='app'>
            <TaskForm/>
            <main className='app_main'>
                <TaskColumn title = "Todo" icon = {TodoIcon}/>
                <TaskColumn title = "Doing" icon = {doingIcon}/>
                <TaskColumn title = "Done" icon = {doneIcon}/>
            </main>
        </div>
    );
}
export default App;