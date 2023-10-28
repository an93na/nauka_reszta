import React from "react";

export const Filters = (props) => {
  const { filter, setFilter } = props;
  return (
    <div>
      <select
        name=""
        id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="0">string z 3 znakami</option>
        <option value="1">string z wiekszą ilością znamków niż 3</option>
        <option value="2">string z mniejszą ilością znaków niż 3</option>
        <option value="3">pokaż wszystko</option>
      </select>
    </div>
  );
};
