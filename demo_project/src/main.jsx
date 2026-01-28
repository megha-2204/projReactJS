// main.jsx (fixed)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  App, {Todo, CreateTodo, CreateTodo01,CreateTodo02, ElementAttribute } from "./assets/components/App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/*<App />*/}
        {/*<Todo />*/}
        {/*<CreateTodo />*/}
        {/*<CreateTodo02 />*/}
        <ElementAttribute />
    </StrictMode>
);
