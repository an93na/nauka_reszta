import React from "react";
import { useDispatch } from "react-redux";
import { resetBtn } from "./counterSliceEx3";

export const ResetBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      style={{ backgroundColor: "red" }}
      onClick={() => dispatch(resetBtn())}
    >
      RESET
    </button>
  );
};
