import React from "react";

export const List3 = () => {
  const todos = [];
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
