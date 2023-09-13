import React from "react";

export const KomponentBezStanu = () => {
  let number = 1;
  let text = "cześć";
  setTimeout(() => {
    number += 1;
  }, 1000);
  return (
    <article>
      <h3>KomponentBezStanu</h3>
      <p>zmienna trzymająca "stan": {number}</p>
    </article>
  );
};
