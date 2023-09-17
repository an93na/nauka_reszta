import React from "react";
import { Child } from "./Child";

export const Parent = () => {
  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <h5>Nadrzędny komponent (Parent)</h5>
      <Child bcolor={"green"} color="pink" />
    </div>
  );
};
