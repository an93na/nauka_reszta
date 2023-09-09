import React from "react";

export const KomponentFunkcyjny = () => {
  const div = <div>div</div>;
  return (
    <article>
      <h3>Komponent Funkcyjny</h3>
      {div}
      <button style={{ width: "auto", padding: "5px", margin: "5px" }}>
        Click me
      </button>
    </article>
  );
};
