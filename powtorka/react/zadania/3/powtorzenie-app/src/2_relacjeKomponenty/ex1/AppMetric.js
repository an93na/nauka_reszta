import React from "react";
import { Metric1 } from "./Metric1";
import { Metric2 } from "./Metric2";
import { Metric3 } from "./Metric3";

export const AppMetric = () => {
  return (
    <article>
      <h3>Metrics</h3>
      <div style={{display: 'flex'}}>
        <Metric1 />
        <Metric2 />
        <Metric3 />
      </div>
    </article>
  );
};
