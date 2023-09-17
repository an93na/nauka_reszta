import React from "react";
import { Child2 } from "./Child2";

export const Parent2 = () => {
  let person = {
    name: "Joe",
    lastName: "Doe",
  };
  return (
    <div>
      <h4>Parent2</h4>
      <Child2 name={person.name} lastName={person.lastName} />
    </div>
  );
};
