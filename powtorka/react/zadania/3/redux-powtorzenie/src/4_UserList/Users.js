import React from "react";
import { UserForm } from "./UserForm";
import { Filters } from "./Filters";
import { Metric } from "./Metric";
import { UsersList } from "./UsersList";

export const Users = () => {
  return (
    <article>
      <h3>Users</h3>
      <UserForm/>
      <Filters/>
      <Metric />
      <UsersList />
    </article>
  );
};
