import React, { useState } from "react";

export const Form = (props) => {
  const { setTasks, title, setTitle, content, setContent } = props;
  const [ostrzezenie, setOstrzezenie] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title !== "" && content !== "") {
          setOstrzezenie(false);
          const newTask = { title, content, id: Math.random() };
          // console.log(tasks);
          setTasks((prevTask) => [...prevTask, newTask]);
          setContent("");
          setTitle("");
        } else {
          setOstrzezenie(true);
        }
      }}
    >
      {ostrzezenie ? (
        <p style={{ color: "red" }}>Nie można dodać pustego pola</p>
      ) : (
        <p></p>
      )}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
