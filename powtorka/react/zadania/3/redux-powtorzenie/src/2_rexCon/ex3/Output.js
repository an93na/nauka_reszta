import React from "react";
import { useSelector } from "react-redux";
import { selectCounter6 } from "./counterSliceEx3";

export const Output = () => {
  const counter = useSelector(selectCounter6);
  return <input type="text" readOnly value={counter} style={{color: 'orange'}} />;
};
