import React from "react";
import cacekImg from "./cacek.jpg";
import gacekImg from "./gacek.jpg";

export const Assets = () => {
  return (
    <article>
      <h3>Assets</h3>
      <img
        src={cacekImg}
        alt="cacek"
        style={{ width: "200px", padding: "5px", borderRadius: "25px" }}
      />
      <img
        src={gacekImg}
        alt="gacek"
        style={{ width: "200px", padding: "5px", borderRadius: "25px" }}
      />
    </article>
  );
};
