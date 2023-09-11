import React from "react";
// import name export
import { Button } from "./components/Button/Button";
// import default export
import Button1 from './components/Button/Button';

const Heading = () => {
    return <h5>Nauka React</h5>
}

const Podtytul = () => {
    return <p>To jest podtytuł</p>
}

export const Relacje = () => {
  return (
    <article>
      <h3>Relacje</h3>
      <Heading/>
      <Podtytul/>
      <Podtytul/>
      <Podtytul/>
      <Button/>
      <Button1/>
    </article>
  );
};
