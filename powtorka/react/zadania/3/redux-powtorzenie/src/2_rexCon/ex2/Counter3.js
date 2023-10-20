import React from "react";
import { useSelector } from "react-redux";
import { selectorCounter5 } from "./counterSlice";

export const Counter3 = () => {
  const counter5 = useSelector(selectorCounter5);
  return (
    <article>
      <button>+1</button>
      <input type="text" name="" id="" value={counter5} readOnly />
      <button>-1</button>
    </article>
  );
};
