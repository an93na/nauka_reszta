import React from "react";

export const ListyTabele = () => {
  const tablicaStringow = ["test", "test2", "test3"];
  return (
    <article>
      <h3>ListyTabele</h3>
      <ul>
        {tablicaStringow.map((element) => <li key={element}>{element}</li>)}
      </ul>
    </article>
  );
};
