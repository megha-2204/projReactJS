import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/Card.jsx";
import Todo from "./components/todo.jsx";
import Events from "./components/Events.jsx";
import Hooks from "./components/Hooks.jsx";
import UsersInput from "./components/UsersInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersInput />
  </StrictMode>
);
