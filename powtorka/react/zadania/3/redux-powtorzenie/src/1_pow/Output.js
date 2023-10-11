import React from "react";

export const Output = (props) => {
  const { counter } = props;
  return (
    <div>
      <h4>{counter}</h4>
    </div>
  );
};
