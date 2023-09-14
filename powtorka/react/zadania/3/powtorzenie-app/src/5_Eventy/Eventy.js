import React, { useState } from "react";

export const Eventy = () => {
  const [state, setState] = useState([]);
  const [val, setVal] = useState("hello");
  const [label, setLabel] = useState("Click me");
  const [textInputValue, setTextInputValue] = useState("");
  return (
    <article>
      <h3>Eventy</h3>
      <input
        type="text"
        name=""
        id=""
        value={val}
        onChange={(event) => {
          //   console.log(event.target.value);
          setVal(event.target.value);
        }}
      />
      <input
        type="text"
        value={textInputValue}
        onChange={(e) => setTextInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setLabel("You clicked me");
          console.log({ textInputValue });
        }}
      >
        {label}
      </button>
    </article>
  );
};
