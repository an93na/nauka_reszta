import React from "react";

export const Child = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bcolor, padding: 5}}
    >
      <h6 style={{color: props}}>Podrzędny komponent (Child)</h6>
    </div>
  );
};
