import React, { useState } from "react";
import { FormWeightConventer } from "./FormWeightConventer";
import { Output } from "./Output";

export const WeightConventer = () => {
  const [value, setValue] = useState("");
  return (
    <article>
      <div
        style={{
          width: 250,
          border: "1px solid gray",
          padding: 10,
          borderRadius: "15px",
          textAlign:'center'
        }}
      >
        <h3>WeightConventer</h3>
        <FormWeightConventer value={value} setValue={setValue} />
        <Output value={`${value * 100} centymetr`} bgColor={"palevioletred"} />
        <Output value={`${value * 0.001} kilometr`} bgColor={"green"} />
        <Output
          value={`${(value * 0.00054)} Mila Morska`}
          bgColor={"blue"}
        />
      </div>
    </article>
  );
};
