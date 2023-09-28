import React, { useState } from "react";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Routes, Route, Link } from "react-router-dom";

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
        {/* {
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
        } */}

        {/*         {
          <div style={{ margin: 20, marginTop: 50 }}>
            {navigationState === "home" && <Home />}
            {navigationState === "form" && <Form />}
            {navigationState === "list" && <List />}
          </div>
        } */}
        {<div style={style}>
          <Link to="/">Home</Link>
          <Link to="form">Form</Link>
          <Link to="list">List</Link>
          </div>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="list" element={<List/>}/>
        </Routes>
      </article>
    </div>
  );
}

export default App;
