import React from "react";
import { UserForm } from "./UserForm";
import { Filters } from "./Filters";
import { Metric } from "./Metric";
import { UsersList } from "./UsersList";

const style = {
  border: "solid 1px white",
  borderRadius: "10px",
  padding: 10,
  marginBottom: 15,
};

export const Users = () => {
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
      <Metric />
      <UsersList />
    </article>
  );
};
