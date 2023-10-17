import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
    const counter = useSelector((state) => state.counter.value)
  return <article>{counter}</article>;
};
