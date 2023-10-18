import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  resetCounter,
  toggleShowPoweredValue,
} from "./conterSlice";

export const Counter = () => {
  const counter = useSelector((state) => state.counter3.value);
  const dispatch = useDispatch();
  const showPoweredValue = useSelector(
    (state) => state.counter3.showPoweredValue
  );
  const poweredCounter = useSelector((state) => state.counter3.poweredValue);
  return (
    <article>
      <button onClick={() => dispatch(increment())}>+1</button>
      <input type="text" value={counter} readOnly />
      <input type="text" value={poweredCounter} readOnly />
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      <label>
        Show powered value
        <input
          type="checkbox"
          name=""
          id=""
          checked={showPoweredValue}
          onChange={() => {
            dispatch(toggleShowPoweredValue());
          }}
        />
      </label>
      {showPoweredValue && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a
          unde quo pariatur hic deleniti nam temporibus dignissimos nobis.
          Voluptas aliquam unde quia, cumque dolorum labore iure dicta eius eum.
        </p>
      )}
    </article>
  );
};
