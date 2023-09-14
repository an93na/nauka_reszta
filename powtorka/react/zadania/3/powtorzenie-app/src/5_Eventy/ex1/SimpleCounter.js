import React, { useState } from "react";

export const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Counter ex1</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter + 5)}>+5</button>
      <input type="text" name="" id="" readOnly value={counter}/>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter - 5)}>-5</button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </div>
  );
};
