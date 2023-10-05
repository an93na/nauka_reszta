import React, { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3010/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).then(() => {
      setTitle("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <button style={{backgroundColor: 'pink', width: 'fit-content', textAlign: 'center', alignItems: 'center'}}>Submit</button>
    </form>
  );
};
