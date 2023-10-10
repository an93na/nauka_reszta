import React, { useState } from "react";

export const Users = () => {
    const [users, setUsers] = useState([]);
    
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
      </tbody>
     </table>
    </div>
  );
};
