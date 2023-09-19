import React, { useState } from "react";
import { Form } from "./components/Form";

export const SimpleTodoList = () => {
  const [tasks, setTasks] = useState([
    "Pouczyć się TSa",
    // NaN,
    "Poucyzć się JSa",
    // undefined,
    "pouczyć się CSSa",
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <div>
      <h5>SimpleTodoList</h5>
      <ul>
        {tasks.map((task) => (
          <li key={Math.random()}>{task}</li>
        ))}
      </ul>
      <Form
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};
