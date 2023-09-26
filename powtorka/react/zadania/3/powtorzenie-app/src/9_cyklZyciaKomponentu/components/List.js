import React, { useEffect, useState } from "react";

export const List = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });

    fetch("http://localhost:3010/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(todo.id);
                      fetch(`http://localhost:3010/todos/${todo.id}`, {
                        method: "DELETE",
                      }).then(() => {
                        fetch("http://localhost:3010/todos")
                          .then((response) => response.json())
                          .then((data) => {
                            setTodos(data);
                          });
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
