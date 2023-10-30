import React from "react";
import { useSelector } from "react-redux";
import { selectTotalMarkofTodos, selectTotalNumberOfTodos } from "./Todo3slice";

export const Metrics = () => {
  const total = useSelector(selectTotalNumberOfTodos);
  const totalMark = useSelector(selectTotalMarkofTodos);
  return (
    <div
      style={{ border: "solid 1px white", borderRadius: "10px", padding: 10 }}
    >
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Ilość wszystkich znaków: <b>{totalMark}</b>
      </p>
      <p>
        Ilość słów, które mają mniej niż 5 znaków: <b>{10}</b>
      </p>
    </div>
  );
};
