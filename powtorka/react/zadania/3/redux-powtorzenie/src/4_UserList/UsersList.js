import React from "react";
import { useSelector } from "react-redux";
import { usersSelector } from "./usersSlice";

export const UsersList = () => {
  const selectUser = useSelector(usersSelector);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectUser.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <button style={{ backgroundColor: "red", marginBottom: 0 }}>
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
