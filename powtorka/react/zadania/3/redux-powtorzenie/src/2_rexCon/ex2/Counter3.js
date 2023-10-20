import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  resetCounter,
  selectorCounter5,
} from "./counterSlice";

export const Counter3 = () => {
  const counter5 = useSelector(selectorCounter5);
  const dispatch = useDispatch();
  const wart = 10
  return (
    <article>
      <button onClick={() => dispatch(increment(wart))}>+{wart}</button>
      <input type="text" name="" id="" value={counter5} readOnly />
      <button onClick={() => dispatch(decrement(wart))}>-{wart}</button>
      <button onClick={() => dispatch(resetCounter())}>RESET</button>
    </article>
  );
};
