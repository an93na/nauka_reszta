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

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("form");
  const [tasks, setTasks] = useState([
    { title: "pouczyć się", content: "JSa", id: 34 },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setSelectedTab(e.target.value);
  };
  return (
    <div>
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
          <input
            checked={selectedTab === "form"}
            value="form"
            type="radio"
            onChange={handleChange}
          />
          Form
        </label>
        <label>
          <input
            checked={selectedTab === "list"}
            value="list"
            type="radio"
            onChange={handleChange}
          />
          List
        </label>
      </div>

      <div style={{ margin: 20, marginTop: 50 }}>
        {selectedTab === "home" && <Home />}
        {selectedTab === "form" && (
          <Form
            tasks={tasks}
            setTasks={setTasks}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />
        )}
        {selectedTab === "list" && <List tasks={tasks} setTasks={setTasks} />}
      </div>
    </div>
  );
};
