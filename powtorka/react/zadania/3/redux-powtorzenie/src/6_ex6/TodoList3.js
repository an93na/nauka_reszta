import React from "react";
import { Form3 } from "./Form3";
import { List3 } from "./List";
import { Metrics } from "./Metrics";
import { Search } from "./Search";

export const TodoList3 = () => {
  return (
    <article>
      <p>TodoList3</p>
      <Form3/>
      <List3/>
      <Metrics/>
      <Search />
    </article>
  );
};
