import React from "react";
// import name export
import { Button } from "./components/Button/Button";
// import default export
import Button1 from './components/Button/Button';
import { Input } from "./components/Input/Input";

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
      <Input></Input>
      <Button1/>
    </article>
  );
};
