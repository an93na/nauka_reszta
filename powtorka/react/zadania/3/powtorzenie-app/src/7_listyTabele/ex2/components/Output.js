import React from "react";

export const Output = (props) => {
  const { value, bgColor } = props;
  return (
    <div>
      <input style={{backgroundColor: bgColor}} type="text" name="" id="" value={value} readOnly />
    </div>
  );
};
