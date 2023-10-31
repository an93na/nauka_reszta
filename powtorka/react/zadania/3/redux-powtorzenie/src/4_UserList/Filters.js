import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchPhrase, setSearchPhrase } from "./usersSlice";

export const Filters = () => {
  const phrase = useSelector(selectSearchPhrase);
  const dispatch = useDispatch();
  return (
    <div>
      <select name="" id="" value={phrase} onChange={(e) => dispatch(setSearchPhrase(e.target.value))}>
        <option value="">All</option>
        <option value="underage">Underage</option>
        <option value="adults">Adults</option>
      </select>
    </div>
  );
};
