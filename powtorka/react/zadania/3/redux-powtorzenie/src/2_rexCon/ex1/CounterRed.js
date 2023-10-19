import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./conterSliceEx";

export const CounterRed = () => {
  const counter = useSelector((state) => state.nazwaUzyta.value);
  const dispatch = useDispatch();
  return (
    <article>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +5
      </button>
      <input type="text" value={counter} readOnly />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -5
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        RESET
      </button>
    </article>
  );
};
