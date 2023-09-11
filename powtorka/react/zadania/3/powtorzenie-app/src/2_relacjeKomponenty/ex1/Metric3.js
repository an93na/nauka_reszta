import React from "react";
import klasa from "./Metric.module.css";

export const Metric3 = () => {
  return (
    <div className={`${klasa.spod} ${klasa.col3}`}>
      <div className={`${klasa.wierzch} ${klasa.w3}`}>
        <p className={klasa.tytul}>
          Study<span>...</span>
        </p>
        <p className={klasa.wartosc}>4hrs</p>
        <p className={klasa.lastWeek}>Last Week - 7hrs</p>
      </div>
    </div>
  );
};
