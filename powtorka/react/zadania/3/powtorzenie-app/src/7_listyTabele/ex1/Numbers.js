import React from "react";

export const Numbers = () => {
  const numbersArray = [3, 1, 6, 5, 2, 4];

  return (
    <div>
      <h5>Numbers</h5>
      <ul>
        {numbersArray.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
