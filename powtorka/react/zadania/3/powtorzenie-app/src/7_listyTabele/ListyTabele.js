import React, { useState } from "react";

const TASK = [
  {
    title: "Napisac prace",
    priority: "high",
    id: 1,
  },
  {
    title: "pouczyć się",
    priority: "high",
    id: 2,
  },
  {
    title: "posprzątać",
    priority: "low",
    id: 3,
  },
  {
    title: "zrobić zakupy",
    priority: "medium",
    id: 4,
  },
  {
    title: "Zrobić obiad",
    priority: "medium",
    id: 5,
  },
  {
    title: "kupić klapki",
    priority: "low",
    id: 6,
  },
  {
    title: "Napisac prace",
    priority: "high",
    id: 7,
  },
];

export const ListyTabele = () => {
  const tablicaStringow = ["test", "test2", "test3"];
  const [tasks, setTasks] = useState(TASK);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  return (
    <article>
      <h3>ListyTabele</h3>
      <ul>
        {tablicaStringow.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (title !== "" && priority !== "") {
            const newTask = { title, priority, id: Math.random() };
            // console.log(newTask)
            setTasks((prevTask) => [...prevTask, newTask]);
            setTitle("");
            setPriority("");
          }
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
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
            Select piriority
          </option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>
                  <button
                    onClick={() => {
                      const nowaTabBezKliknietegoElementu = tasks.filter(
                        (ta) => {
                          return task.id !== ta.id;
                        }
                      );
                      setTasks(nowaTabBezKliknietegoElementu);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};
