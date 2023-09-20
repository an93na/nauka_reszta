import React, { useState } from "react";

export const CatDogPerson = () => {
  const [wybor, setWybor] = useState('');

  const handleChange = (e) => {
    setWybor(e.target.value)
  }
  return (
    <div>
      <h5>CatDogPerson</h5>
      <div>
        <label>
          <input type="radio" name="catordog" id="" value='dog' onClick={handleChange} />
          Dog
        </label>
        <label>
          <input type="radio" name="catordog" id="" value='cat' onClick={handleChange}/>
          Cat
        </label>
        <label>
          <input type="radio" name="catordog" id="" value='both' onClick={handleChange}/>
          Both
        </label>
      </div>
      <img width="300" alt="dog" />
    </div>
  );
};
