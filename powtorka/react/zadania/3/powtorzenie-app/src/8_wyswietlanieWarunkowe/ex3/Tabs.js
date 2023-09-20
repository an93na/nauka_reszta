import React from "react";

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

export const Tabs = () => {
  return (
    <article>
      <div style={style}>
        <label>
          <input value="home" type="radio" />
          Home
        </label>
      </div>

      <div style={{ margin: 20, marginTop: 50 }}></div>
    </article>
  );
};
