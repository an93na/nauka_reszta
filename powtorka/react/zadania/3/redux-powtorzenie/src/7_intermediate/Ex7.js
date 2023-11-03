import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCounter } from "./asyncCounterSlice";

export const Ex7 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCounter());
  }, [dispatch]);
  return (
    <article>
      <h3>Akcje asynchroniczne</h3>
      <button>+5</button>
      <input type="text" name="" id="" value={0} readOnly />
      <button>-10</button>
    </article>
  );
};
