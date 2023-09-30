import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <div style={props.style}>
      <Link to="/">Home</Link>
      <Link to="form">Form</Link>
      <Link to="list">List</Link>
      <Link to="about">About</Link>
      <Link to='todo'>Todo</Link>
    </div>
  );
};
