import React from "react";

export const StyleInlineExercise = () => {
  return (
    <article style={{ verticalAlign: "bottom" }}>
      <p> Style Inline Exercise</p>
      <div
        style={{
          backgroundColor: "blue",
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "40px",
        }}
      >
        1
      </div>
      <div
        style={{
          backgroundColor: "green",
          borderRadius: "50%",
          height: "60px",
          width: "60px",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "60px",
        }}
      >
        2
      </div>
      <div
        style={{
          backgroundColor: "red",
          borderRadius: "50%",
          height: "80px",
          width: "80px",
          display: "inline-block",
          textAlign: "center",
          lineHeight: "80px",
        }}
      >
        3
      </div>
    </article>
  );
};
