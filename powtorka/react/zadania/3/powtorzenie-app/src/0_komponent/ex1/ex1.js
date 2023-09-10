import React from "react";

export const MyFirstComponent = () => {
  const div = <div>Element blokowy div</div>;
  return (
    <article>
      <h3>My First Component</h3>
      {div}
      <button style={{ width: "auto", padding: "5px", margin: "10px", backgroundColor: 'green'}}>
        Click here
      </button>
      <input type="text" name="" id="" placeholder="jakiś tekst..." />
    </article>
  );
};
