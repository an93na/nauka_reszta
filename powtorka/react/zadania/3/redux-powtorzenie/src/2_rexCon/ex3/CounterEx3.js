import React from "react";
import { Increase } from "./Increase";
import { Decrease } from "./Decrease";
import { Output } from "./Output";
import { ResetBtn } from "./ResetBtn";

export const CounterEx3 = () => {
  return (
    <article>
      <h3>Complex Counter</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <Increase value={5} />
        <Increase value={1} />
        <Output />
        <Decrease value={1} />
        <Decrease value={5} />
        <ResetBtn/>
      </div>
    </article>
  );
};
