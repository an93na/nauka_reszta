import React, { useState } from "react";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import { List } from "./components/List";

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

function App() {
  const [navigationState, setNavigationState] = useState("home");

  const handleChange = (e) => {
    setNavigationState(e.target.value);
  };

  return (
    <div className="container">
      <article>
        {
          <div style={style}>
            <label>
              <input
                checked={navigationState === "home"}
                value="home"
                type="radio"
                name="nav"
                onChange={handleChange}
              />
              Home
            </label>
            <label>
              <input
                checked={navigationState === "form"}
                value="form"
                type="radio"
                name="nav"
                onChange={handleChange}
              />
              Form
            </label>
            <label>
              <input
                checked={navigationState === "list"}
                value="list"
                type="radio"
                name="nav"
                onChange={handleChange}
              />
              List
            </label>
          </div>
        }

        {
          <div style={{ margin: 20, marginTop: 50 }}>
            {navigationState === "home" && <Home />}
            {navigationState === "form" && <Form />}
            {navigationState === "list" && <List />}
          </div>
        }
      </article>
    </div>
  );
}

export default App;
