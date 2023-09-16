import React from "react";

const ComponentWithProps = (props) => {
  const { number1, number2 } = props;
  //   return <div>Suma dwóch liczb: {props.number1 + props.number2}</div>;
  return <div>Suma dwóch liczb: {number1 + number2}</div>;
};

const UsersList = (props) => {
  return (
    <li>
      <b>Name:</b> {props.name} <b>LastName:</b> {props.lastName}
    </li>
  );
};

export const ParametryFunkcji = () => {
  const users = [
    { name: "John", lastName: "Doe" },
    { name: "Jane", lastName: "Doe" },
  ];
  return (
    <article>
      <h3>Parametry Funkcji</h3>
      <ComponentWithProps number1={2} number2={5} />
      <ul>
        <UsersList name={users[0].name} lastName={users[0].lastName} />
      </ul>
    </article>
  );
};
