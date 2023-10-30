import React from "react";
import { useState } from "react";
import { addTodo } from "./Todo3slice";
import { useDispatch } from "react-redux";

export const Form3 = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
      }}
    >
      <input
        type="text"
        name=""
        id=""
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
