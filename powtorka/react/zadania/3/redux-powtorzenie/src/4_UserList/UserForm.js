import React, { useState } from "react";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [lastName, seTLastName] = useState("");
  const [age, setAge] = useState("");
  return (
    <form>
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
