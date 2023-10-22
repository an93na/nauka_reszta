import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "./counterSliceEx3";

export const Increase = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(increment(value))}
      style={{ backgroundColor: "green" }}
    >
      +{value}
    </button>
  );
};
