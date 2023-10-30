import React from "react";

export const Metrics = () => {
  return (
    <div
      style={{ border: "solid 1px white", borderRadius: "10px", padding: 10 }}
    >
      <p>
        Total: <b>{5}</b>
      </p>
      <p>
        Ilość wszystkich znaków: <b>{10}</b>
      </p>
      <p>
        Ilość słów, które mają mniej niż 5 znaków: <b>{10}</b>
      </p>
    </div>
  );
};
