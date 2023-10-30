import React from "react";
import { useSelector } from "react-redux";
import { stateTodo3 } from "./Todo3slice";

export const List3 = () => {
  const todos = useSelector(stateTodo3);
  return (
    <ul>
      <li style={{ listStyle: "none" }}>
        <b>TODOS:</b>
      </li>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
