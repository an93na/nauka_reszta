import React, { useState } from "react";

// const user = { name: "Joe", lastName: "Doe" };
// const tabStrings = ["string1", "string2", () => console.log(123)];

// do destrukturyzacji dokładnie te same nazwy w obiektach,
//  ale kolejność nie ma znaczenia
// const { name, lastName } = user;
// console.log(name, lastName)

// do destrukturyzacji dowolność w nazwie
// ale kolejność ma znaczenie
// const [jakasNazwa, cokolwiek, test123] = tabStrings;
// console.log(jakasNazwa, cokolwiek);
// test123();

// const myFunction = () => {
//   return [123, () => console.log(123)];
// };

// const [number, logFunction] = myFunction();

export const StanKomponentu = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Joe");
  const [lastName, setLastName] = useState("Doe");
  //   setTimeout(() => {
  //     setNumber(number + 1);
  //   }, 1000);
  return (
    <article>
      <h3>StanKomponentu</h3>
      <p>state: {number}</p>
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
    </article>
  );
};
