import React, { useState } from "react";

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("form");

  const handleChange = (e) => {
    setSelectedTab(e.target.value);
  };
  return (
    <article>
      <div style={style}>
        <label>
          <input
            checked={selectedTab === "home"}
            value="home"
            type="radio"
            onChange={handleChange}
          />
          Home
        </label>
        <label>
          <input checked={selectedTab === "form"} value="form" type="radio" onChange={handleChange} />
          Form
        </label>
        <label>
          <input checked={selectedTab === "list"} value="list" type="radio" onChange={handleChange} />
          List
        </label>
      </div>

      <div style={{ margin: 20, marginTop: 50 }}></div>
    </article>
  );
};
