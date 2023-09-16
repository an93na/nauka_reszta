import React, { useState } from "react";
import { SimpleCounter } from "../ex1/SimpleCounter";
import { TextFiled } from "../ex2/textFiled";
import { AddTwoNumbers } from "../ex3/AddTwoNumbers";
import { CSSEditor } from "../ex4/CSSEditor";
import { Calculator } from "../ex5/Calculator";
import { Form } from "../ex6/Form";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputCounter, setInputCounter] = useState("");
  const [text, setText] = useState("");
  return (
    <article>
      <h3>Counter</h3>
      <p>Counter value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 5)}>-5</button>
      <button onClick={() => setCounter(0)}>RESET</button>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setCounter(counter + Number(inputCounter));
          setInputCounter("");
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter new value for counter"
          value={inputCounter}
          onChange={(e) => setInputCounter(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write something ..."
      />
      <h2>{text}</h2>
      <SimpleCounter/>
      <TextFiled/>
      <AddTwoNumbers/>
      <CSSEditor/>
      <Calculator/>
      <Form/>
    </article>
  );
};
