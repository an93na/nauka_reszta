import React from "react";

export const Decrease = (props) => {
  const { counter, setCounter } = props;
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter - 5)}>-5</button>
    </div>
  );
};
