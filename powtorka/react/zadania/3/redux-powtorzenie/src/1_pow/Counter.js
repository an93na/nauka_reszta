import React, { useState } from "react";
import { Decrease } from "./Decrease";
import { Increase } from "./Increase";
import { Output } from "./Output";
import { ResetCounter } from "./ResetCounter";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <article>
      <h3>Counter</h3>
      <Increase counter={counter} setCounter={setCounter} />
      <Output counter={counter} />
      <Decrease counter={counter} setCounter={setCounter} />
      <ResetCounter setCounter={setCounter} />
    </article>
  );
};
