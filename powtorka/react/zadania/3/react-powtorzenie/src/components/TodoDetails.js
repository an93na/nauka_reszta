import React from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
  const { id } = useParams();
  return <h2>Todo title: {id}</h2>;
};
