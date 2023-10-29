import React from "react";

export const Form3 = () => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
    }}>
      <input type="text" name="" id="" />
      <button type="submit">Submit</button>
    </form>
  );
};
