import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, resetCounter } from "./conterSlice";

export const Counter = () => {
  const counter = useSelector((state) => state.counter3.value);
  const dispatch = useDispatch()
  return (
    <article>
      <button onClick={() => dispatch(increment())}>+1</button>
      <input type="text" value={counter} readOnly />
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </article>
  );
};
