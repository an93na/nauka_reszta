import React, { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:3010/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  const handleButtonDelClick = (idToDelete) => {
    fetch(`http://localhost:3010/users/${idToDelete}`, {
      method: "DELETE",
    }).then(getUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleButtonDelClick(user.id)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
