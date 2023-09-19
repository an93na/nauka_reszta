import React from "react";

export const Form = (props) => {
  const { todoTitle, setTodoTitle } = props;
  const { tasks, setTasks } = props;
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (todoTitle !== "") {
          const newTask = todoTitle;
          setTasks([...tasks, newTask]);
        }
        // console.log(tasks);
        setTodoTitle("");
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="title ..."
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
