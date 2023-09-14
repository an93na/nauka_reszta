import React, { useState } from "react";

export const AddTwoNumbers = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const result = Number(number1) + Number(number2);
  return (
    <div>
      <h3>AddTwoNumbers</h3>
      <input
        type="text"
        name=""
        id=""
        placeholder="write number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="write number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <p>Result: {result}</p>
    </div>
  );
};
