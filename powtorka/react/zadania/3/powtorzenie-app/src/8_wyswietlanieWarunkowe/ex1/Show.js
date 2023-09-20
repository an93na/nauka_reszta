import React, { useState } from "react";

export const Show = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h5>Wpis na stronie</h5>
      {show ? (
        <p>Lorem ipsum dolor sit amet.</p>
      ) : (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          quae molestias cumque corporis quos iure rem obcaecati velit possimus
          excepturi, facilis nostrum repellat distinctio doloribus ab libero
          quis cupiditate suscipit! Blanditiis repudiandae delectus enim quasi
          obcaecati culpa quod necessitatibus fugiat. Velit incidunt itaque
          error sit fugit dolor. Qui blanditiis nostrum, dolor dicta officiis
          incidunt odit beatae cumque, provident laboriosam ipsum.
        </p>
      )}
      <button
        style={{ width: "fit-content" }}
        onClick={() => setShow((prevSt) => !prevSt)}
      >
        {show ? "Read More" : "Read Less"}{" "}
      </button>
    </div>
  );
};
