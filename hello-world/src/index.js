import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import String from "./reversestring";
import reportWebVitals from "./reportWebVitals";
import KeyListener from "./KeyListener";
import KeyDetail from "./KeyDetail";
import DisplayProperties from "./DisplayProperties";
import DisplayKey from "./DisplayKey";
import TodoApp from "./todoapp/Todo";
import ValidateForm from "./formvalidation/form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <App />
    <String /> */}
    {/* <KeyListener /> */}
    {/* <KeyDetail value={"Test"} property={"propertyValue"} /> */}
    {/* <DisplayProperties /> */}
    {/* <DisplayKey /> */}
    {/* <TodoApp /> */}
    <ValidateForm />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
