import React, { useState } from "react";

export const Form = () => {
  const tasks = [
    { task: "Pouczyć się", priority: "High" },
    { task: "Posprzątać", priority: "Medium" },
  ];
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [task, setTask] = useState(tasks);
  return (
    <div>
      <h3>Form</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (title !== "" && priority !== "") {
            const newTask = { title, priority };
            setTask((prevTasks) => [...prevTasks, newTask]);
            setTitle("");
            setPriority("");
          }
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Task title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(task, null, 2)}</pre>
    </div>
  );
};
