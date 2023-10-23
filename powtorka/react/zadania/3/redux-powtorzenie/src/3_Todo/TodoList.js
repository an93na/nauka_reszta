import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodo } from "./sliceTodoList";

export const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const select = useSelector(selectTodo);
  const dispatch = useDispatch();
  return (
    <article>
      <h3>TodoList</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(todoTitle));
          setTodoTitle("");
        }}
      >
        <input
          required
          type="text"
          name=""
          id=""
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {select.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </article>
  );
};
