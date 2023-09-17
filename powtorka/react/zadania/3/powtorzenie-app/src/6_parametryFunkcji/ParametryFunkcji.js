import React, { useState } from "react";

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

const CounterControler = (props) => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={() => props.funkcjaZmieniająca(props.wynik + 1)}>
        +1
      </button>
      <button onClick={() => props.funkcjaZmieniająca(props.wynik - 1)}>
        -1
      </button>
      <button onClick={() => props.funkcjaZmieniająca(props.wynik + 5)}>
        +5
      </button>
      <button onClick={() => props.funkcjaZmieniająca(props.wynik - 5)}>
        -5
      </button>
      <button onClick={() => props.funkcjaZmieniająca(0)}>RESET</button>
    </div>
  );
};

const CounterOutput = (props) => {
  return <p>Wartość Countera: {props.wynik}</p>;
};

export const ParametryFunkcji = () => {
  const users = [
    { name: "John", lastName: "Doe" },
    { name: "Jane", lastName: "Doe" },
  ];
  const [counter, setCounter] = useState(0);
  return (
    <article>
      <h3>Parametry Funkcji</h3>
      <ComponentWithProps number1={2} number2={5} />
      <ul>
        <UsersList name={users[0].name} lastName={users[0].lastName} />
      </ul>
      <CounterControler wynik={counter} funkcjaZmieniająca={setCounter} />
      <CounterOutput wynik={counter} />
    </article>
  );
};
