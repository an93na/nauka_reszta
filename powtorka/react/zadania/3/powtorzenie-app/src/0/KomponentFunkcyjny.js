import React from "react";

export const KomponentFunkcyjny = () => {
  const div = <div>div</div>;
  const przykladowaZmienna =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum omnis in sequi suscipit aut corporis ex culpa non possimus, cumque illum nulla nam, eos cupiditate placeat illo soluta repellat.";
  const user = { name: "Jan", age: 20 };
  const tablicaLiczb = [1, 2, 34, 5, 6, 4];
  const tablicaStringow = ["jakis", "krotki", "string"];
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
    </article>
  );
};
