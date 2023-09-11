import React from "react";
import klasa from "./Metric.module.css";

export const Metric2 = () => {
  return (
    <div className={`${klasa.spod} ${klasa.w2}`}>
      <div className={`${klasa.wierzch} ${klasa.ciemnyRoz}`}>
        <p className={klasa.tytul}>
          Play<span>...</span>
        </p>
        <p className={klasa.wartosc}>10hrs</p>
        <p className={klasa.lastWeek}>Last Week - 8hrs</p>
      </div>
    </div>
  );
};
