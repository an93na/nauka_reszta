import React, { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return <ul>
    {users.map((user)=><li key={user.id}>{user.name}</li>
    )}
  </ul>;
};
