import React from "react";

const mnozenieDwochLiczb = (a, b) => {
  return a * b;
};
export const KomponentFunkcyjny = () => {
  const div = <div>div</div>;
  const przykladowaZmienna =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum omnis in sequi suscipit aut corporis ex culpa non possimus, cumque illum nulla nam, eos cupiditate placeat illo soluta repellat.";
  const user = { name: "Jan", age: 20 };
  const tablicaLiczb = [1, 2, 34, 5, 6, 4];
  const tablicaStringow = ["jakis", "krotki", "string"];
  const dodawanieDwochLiczb = (a, b) => {
    return a + b;
  };
  return (
    <article>
      <h3>Komponent Funkcyjny</h3>
      {div}
      <button style={{ width: "auto", padding: "5px", margin: "5px" }}>
        Click me
      </button>
      <p>{przykladowaZmienna}</p>
      <ul>
        <li>
          <b>Name:</b> {user.name}
        </li>
        <li>
          <b>Age:</b> {user.age}
        </li>
      </ul>
      <div>{tablicaLiczb.slice("").join(", ")}</div>
      <div>{tablicaStringow.slice("").join(" ")}</div>
      <p>wynik dodawania dwóch liczb 3 + 4 = {dodawanieDwochLiczb(3, 4)}</p>
      <p>wynik mnożenia dwóch liczb 3 * 4 = {mnozenieDwochLiczb(3, 4)}</p>
    </article>
  );
};
