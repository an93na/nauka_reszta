import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, usersSelector } from "./usersSlice";

export const UsersList = () => {
  const selectUser = useSelector(usersSelector);
  const dispatch = useDispatch();
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
                <button
                  style={{ backgroundColor: "red", marginBottom: 0 }}
                  onClick={() => dispatch(removeUser(user.id))}
                >
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
