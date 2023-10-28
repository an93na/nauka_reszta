import React, { useState } from "react";
import { Filters } from "./Filters";
import { List } from "./List";

export const TodoList2 = () => {
  const [todos, setTodos] = useState(["dsds", "dssadeqwwqe", "dswr", "dswqrd"]);
  return (
    <article>
      <p>TodoList</p>
      <Filters />
      <List todos={todos} />
    </article>
  );
};
