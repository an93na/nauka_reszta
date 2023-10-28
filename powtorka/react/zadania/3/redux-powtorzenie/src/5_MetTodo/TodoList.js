import React, { useState } from "react";
import { Filters } from "./Filters";
import { List } from "./List";

export const TodoList2 = () => {
  const [todos, setTodos] = useState([
    "dsds",
    "eee",
    "e",
    "rr",
    "dssadeqwwqe",
    "dswr",
    "dswqrd",
  ]);
  const [filter, setFilter] = useState("3");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "0" && todo.length === 3) {
      return true;
    }
    if (filter === "1" && todo.length > 3) {
      return true;
    }
    if (filter === "2" && todo.length < 3) {
      return true;
    }
    if (filter === "3") {
      return true;
    }
    return false;
  });
  return (
    <article>
      <p>TodoList</p>
      <Filters filter={filter} setFilter={setFilter} />
      <List todos={filteredTodos} />
    </article>
  );
};
