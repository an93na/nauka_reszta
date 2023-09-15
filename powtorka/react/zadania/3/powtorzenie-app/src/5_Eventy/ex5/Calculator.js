import React, { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const getResult = (n1, n2, op) => {
    if (op === "+") {
      return Number(n1) + Number(n2);
    } else if (op === "-") {
      return Number(n1) - Number(n2);
    } else if (op === "*") {
      return Number(n1) * Number(n2);
    } else if (op === "/") {
      return Number(n1) / Number(n2);
    }
    return "";
  };
  const result = getResult(num1, num2, operation);

  return (
    <div>
      <h3>Calculator</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          name=""
          id=""
          placeholder="number1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select
          name=""
          id=""
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="" hidden>
            Wybierz
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="number2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <input type="text" name="" id="" readOnly value={result} />
      </div>
    </div>
  );
};
