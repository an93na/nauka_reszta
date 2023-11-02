import React from 'react'

const style = {
        border: "1px solid gray",
        borderRadius: 10,
        padding: 20,
        width: "fit-content",
      }

export const Metric = ({ label, value }) => {
  return (
    <p
      style={style}
    >
      <b>{label}: </b>
      {value}
    </p>
  );
};