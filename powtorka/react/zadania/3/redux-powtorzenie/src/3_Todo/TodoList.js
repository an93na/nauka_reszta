import React, { useState } from "react";

export const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <article>
      <h3>TodoList</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>{}</ul>
    </article>
  );
};
