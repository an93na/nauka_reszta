import React, { useState } from "react";
import { Filters } from "./Filters";
import { List } from "./List";

export const TodoList2 = () => {
  const [todos, setTodos] = useState(["dsds", "dssadeqwwqe", "dswr", "dswqrd"]);
  const [filter, setFilter] = useState('3')
  return (
    <article>
      <p>TodoList</p>
      <Filters filter={filter} setFilter={setFilter}/>
      <List todos={todos} />
    </article>
  );
};
