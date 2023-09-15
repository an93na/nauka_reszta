import React, { useState } from "react";

export const CSSEditor = () => {
  const [color, setColor] = useState("blue");
  const [position, setPosition] = useState("flex-start");
  const [bok, setBok] = useState(0);
  // console.log(bok);
  return (
    <div>
      <h3>CSSEditor</h3>
      <select name="" id="" onChange={(e) => setColor(e.target.value)}>
        <option value="" hidden>
          Select color
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <label>
        Flex-start
        <input
          type="radio"
          name="position"
          id=""
          value="flex-start"
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
        Center
        <input
          type="radio"
          name="position"
          id=""
          value="center"
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
        Flex-end
        <input
          type="radio"
          name="position"
          id=""
          value="flex-end"
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <input
        type="range"
        name=""
        id=""
        value={bok}
        onChange={(e) => setBok(e.target.value)}
        max={50}
      />
      <h5>Preview</h5>
      <div style={{ display: "flex", justifyContent: position }}>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: color,
            borderRadius: bok + "%",
          }}
        ></div>
      </div>
    </div>
  );
};
