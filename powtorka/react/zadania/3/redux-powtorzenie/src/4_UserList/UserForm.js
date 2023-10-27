import React from "react";

export const UserForm = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="lastName" placeholder="LastName" required />
      <input type="text" name="age" placeholder="Age" required />
      <button type="submit">Submit</button>
    </form>
  );
};
