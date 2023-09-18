import React, { useState } from "react";

export const SimpleTodoList = () => {
  const [tasks] = useState([
    "Pouczyć się TSa",
    // NaN,
    "Poucyzć się JSa",
    // undefined,
    "pouczyć się CSSa",
  ]);
  return (
    <div>
      <h5>SimpleTodoList</h5>
      <ul></ul>
    </div>
  );
};
