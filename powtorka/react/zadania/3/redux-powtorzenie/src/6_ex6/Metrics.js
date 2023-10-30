import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalMarkofTodos,
  selectTotalNumberOfTodos,
  selectTotalNumberOfTodosLess5Mark,
  selectTotalNumberOfTodosMore5Mark,
} from "./Todo3slice";

export const Metrics = () => {
  const total = useSelector(selectTotalNumberOfTodos);
  const totalMark = useSelector(selectTotalMarkofTodos);
  const todosLessmark5 = useSelector(selectTotalNumberOfTodosLess5Mark);
  const todosMoreMark5 = useSelector(selectTotalNumberOfTodosMore5Mark);
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
        Ilość słów, które mają mniej niż 5 znaków: <b>{todosLessmark5}</b>
      </p>
      <p>
        Ilość słów, które mają więcej niż 5 znaków: <b>{todosMoreMark5}</b>
      </p>
    </div>
  );
};
