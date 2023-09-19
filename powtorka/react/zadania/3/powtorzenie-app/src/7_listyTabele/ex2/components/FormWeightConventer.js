import React from "react";

export const FormWeightConventer = (props) => {
  const { value, setValue } = props;
  return (
    <form>
      <input
        type="text"
        placeholder="Wpisz wartość w metrach"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
