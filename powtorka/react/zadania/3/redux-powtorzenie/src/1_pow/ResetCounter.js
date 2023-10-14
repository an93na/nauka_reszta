import React from "react";

export const ResetCounter = (props) => {
  const { setCounter } = props;
  return (
    <button
      onClick={() => setCounter(0)}
      style={{ backgroundColor: "red", width: "fit-content" }}
    >
      Reset
    </button>
  );
};
