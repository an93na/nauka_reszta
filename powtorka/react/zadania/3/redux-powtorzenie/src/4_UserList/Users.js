import React from "react";
import { UserForm } from "./UserForm";
import { Filters } from "./Filters";
import { Metric } from "./Metric";
import { UsersList } from "./UsersList";
import { useSelector } from "react-redux";
import { amountOfFilteredUsers, totalNumberUser } from "./usersSlice";

const style = {
  border: "solid 1px white",
  borderRadius: "10px",
  padding: 10,
  marginBottom: 15,
};

export const Users = () => {
  const total = useSelector(totalNumberUser);
  const filtredAmount = useSelector(amountOfFilteredUsers);

  return (
    <article>
      <h3>Users</h3>
      <div style={style}>
        <h6>UserForm</h6>
        <UserForm />
      </div>
      <div style={style}>
        <h6>Filters</h6>
        <Filters />
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <Metric label="Total" value={total} />
        <Metric label="Amount of filtered users" value={filtredAmount} />
      </div>
      <UsersList />
    </article>
  );
};
