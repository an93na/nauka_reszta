import React from "react";

const ComponentWithProps = (props) => {
  return <div>Suma dwóch liczb: {props.number1 + props.number2}</div>;
};

export const ParametryFunkcji = () => {
  return (
    <article>
      <h3>Parametry Funkcji</h3>
      <ComponentWithProps number1={2} number2={5} />
    </article>
  );
};
