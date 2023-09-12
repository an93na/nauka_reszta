import React from "react";
import classes from "../AppEx2.module.css";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  return (
    <div className={classes.niebieski}>
      TodoList.js
      <ul style={{padding: 0}}>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    </div>
  );
};
