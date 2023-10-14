import React from "react";

export const Output = (props) => {
  const { counter } = props;
  return (
    <div>
      <input readOnly value={counter} />
    </div>
  );
};
