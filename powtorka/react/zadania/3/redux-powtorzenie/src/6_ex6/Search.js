import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchPhrase, setSearchPhrase } from "./Todo3slice";

export const Search = () => {
  const search = useSelector(selectSearchPhrase);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: 10 }}>
      <p>Search: </p>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => dispatch(setSearchPhrase(e.target.value))}
      />
    </div>
  );
};
