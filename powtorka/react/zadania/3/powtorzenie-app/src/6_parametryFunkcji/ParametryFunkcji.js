import React from "react";

const ComponentWithProps = () => {
  const number1 = 10;
  const number2 = 10;
  return <div>Suma dwóch liczb: {number1 + number2}</div>
};

export const ParametryFunkcji = () => {
  return (
    <article>
      <h3>Parametry Funkcji</h3>
      <ComponentWithProps/>
      <ComponentWithProps/>
      <ComponentWithProps/>
    </article>
  );
};
