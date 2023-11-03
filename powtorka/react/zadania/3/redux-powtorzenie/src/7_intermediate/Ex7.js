import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCounter,
  selectCounterValue,
  selectIsLoading,
} from "./asyncCounterSlice";
import { Loader } from "./Loader/Loader";

export const Ex7 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCounter());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const value = useSelector(selectCounterValue);

  return (
    <article>
      {isLoading && <Loader />}
      <h3>Akcje asynchroniczne</h3>
      <button>+5</button>
      <input type="text" name="" id="" value={value} readOnly />
      <button>-10</button>
    </article>
  );
};
