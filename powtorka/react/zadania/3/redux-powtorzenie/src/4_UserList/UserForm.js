import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [lastName, seTLastName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newUser = { name, lastName, age, id: Math.random() };
        dispatch(addUser(newUser));
        setName("");
        seTLastName("");
        setAge("");
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="LastName"
        value={lastName}
        onChange={(e) => seTLastName(e.target.value)}
        required
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
