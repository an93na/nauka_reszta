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
  const [age, setAge] = useState(25);
  const [address, setAddress] = useState({
    city: "Warsaw",
    street: "Dworcowa",
    postalCode: 123,
  });
  const [users, setUsers] = useState(["Jane", "John", "Jack"]);
  const [number1] = useState(10);
  const [number2] = useState(15);

  //   setTimeout(() => {
  //     setNumber(number + 1);
  //   }, 1000);

  setTimeout(() => {
    // const newAddress = { city: "Cracow", street: "Dluga", postalCode: 29 };
    // setAddress(newAddress);
    setAddress((prevAddress) => ({ ...prevAddress, street: "Kwiatowa" }));
  }, 5000);

  // setTimeout(() => {
  //   setUsers((prevUsers) => [...prevUsers, "John"]);
  // }, 6000);

  const sum = number1 + number2;
  return (
    <article>
      <h3>StanKomponentu</h3>
      <p>state: {number}</p>
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>City: {address.city}</p>
      <p>Street: {address.street}</p>
      <p>Postal Code: {address.postalCode}</p>
      <p>Users: {users.slice("").join(" ")}</p>
      <p>Wynik obliczenia równa się: {number1} + {number2} = {sum}</p>
    </article>
  );
};
