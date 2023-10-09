import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3010/todos/${id}`);
  }, [id]);
  return <h2>Todo title: {id}</h2>;
};
