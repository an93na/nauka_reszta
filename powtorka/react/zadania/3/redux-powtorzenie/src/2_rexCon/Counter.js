import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
    const counter = useSelector((state) => state.counter.value)
  return <article>
    <button>+1</button>
    <input type="text" value={counter} readOnly />
    <button>-1</button>
    </article>;
};
