import React, { useState } from "react";

const USER = { name: "John", lastName: "Doe", age: 12 };
const TODO = { name: "pouczyć się", priority: "High" };

export const WyswietlStan = () => {
  const [user] = useState(USER);
  const [todo] = useState(TODO);
  return (
    <article>
      <h3>Wyświetl Stan</h3>
      <p>
        <b>User:</b>
      </p>
      <p>Name: {user.name}</p>
      <p>Last name: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <p>
        <b>User's task</b>
      </p>
      <p>Name: {todo.name}</p>
      <p>Priority: {todo.priority}</p>
    </article>
  );
};
