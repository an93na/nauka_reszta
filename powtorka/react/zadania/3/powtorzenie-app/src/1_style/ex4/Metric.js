import React from "react";
import klasa from "./MetricCSS.module.css";

export const Metric = () => {
  return (
    <article>
      <h3>Metric</h3>
      <div className={klasa.spod}>
        <div className={klasa.wierzch}>
          <p className={klasa.tytul}>
            Work<span>...</span>
          </p>
          <p className={klasa.wartosc}>32hrs</p>
          <p className={klasa.lastWeek}>Last Week - 36hrs</p>
        </div>
      </div>
    </article>
  );
};
