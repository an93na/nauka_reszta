import React, { useEffect, useState } from "react";

export const Form = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Komponent Form został zamontowany");

    return () => {
      console.log("Komponent FORM się ODMONTOWAŁ");
    };
  }, []);

  console.log("Console log poza useEffectem");

  return (
    <div>
      <h2>{counter}</h2>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Content" />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};