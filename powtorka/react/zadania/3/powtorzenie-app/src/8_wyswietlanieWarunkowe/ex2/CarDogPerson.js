import React, { useState } from "react";
import gacek from "./asset/gacek.jpg";
import cacek from "./asset/cacek.jpg";

export const CatDogPerson = () => {
  const [wybor, setWybor] = useState("");
  //   console.log(wybor)

  const handleChange = (e) => {
    setWybor(e.target.value);
  };
  return (
    <div>
      <h5>CatDogPerson</h5>
      <div>
        <label>
          <input
            checked={wybor === 'dog'}
            type="radio"
            name="catordog"
            id=""
            value="dog"
            onChange={handleChange}
          />
          Dog
        </label>
        <label>
          <input
            checked={wybor === 'cat'}
            type="radio"
            name="catordog"
            id=""
            value="cat"
            onChange={handleChange}
          />
          Cat
        </label>
        <label>
          <input
            checked={wybor === 'both'}
            type="radio"
            name="catordog"
            id=""
            value="both"
            onChange={handleChange}
          />
          Both
        </label>
      </div>
      {(wybor === "cat" || wybor ==='both') && <img width="300" alt="dog" src={cacek} />}
      {(wybor === "dog" || wybor ==='both') && <img width="300" alt="dog" src={gacek} />}
    </div>
  );
};
