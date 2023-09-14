import React, { useState } from "react";

export const TextFiled = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h3>TextFiled</h3>
      <input
        type="text"
        name=""
        id=""
        placeholder="write your text ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
};
