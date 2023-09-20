import React, { useState } from "react";
import { Show } from "./ex1/Show";
import { CatDogPerson } from "./ex2/CarDogPerson";

const Component1 = () => {
  return <div style={{ color: "blue" }}>Component1</div>;
};
const Component2 = () => {
  return <div style={{ color: "green" }}>Component2</div>;
};
const Component3 = () => {
  return <div style={{ color: "red" }}>Component3</div>;
};

export const WyswietlanieWarunkowe = () => {
  const [isChecked, setChecked] = useState(false);
  const [cmp, setCmp] = useState("");
  if (isChecked) {
    return (
      <div>
        odblokowałem się
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    );
  }
  return (
    <article>
      <h3>Wyświetlanie Warunkowe</h3>
      <label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          //   onChange={(e) => setChecked(e.target.checked)}
          onChange={() => setChecked((prevState) => !prevState)}
        />
        wyświetl
      </label>
      {isChecked && <p> Lorem ipsum dolor sit amet.</p>}
      {isChecked ? <p>Checkbox zaznaczony</p> : <p>Checkobox nie zaznaczony</p>}

      <select
        name=""
        id=""
        value={cmp}
        onChange={(e) => setCmp(e.target.value)}
      >
        <option value="" hidden>
          Wybierz komponent
        </option>
        <option value="cmp1">Component1</option>
        <option value="cmp2">Component2</option>
        <option value="cmp3">Component3</option>
      </select>
      {cmp === "cmp1" && <Component1 />}
      {cmp === "cmp2" && <Component2 />}
      {cmp === "cmp3" && <Component3 />}

      <Show/>
      <CatDogPerson/>
    </article>
  );
};
