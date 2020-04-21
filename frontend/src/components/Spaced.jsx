import React from "react";

export const Spaced = ({elements}) => (
  elements
    .map((x, index) => <span key={index}>{x}</span>)
    .reduce((prev, curr) => [
      prev,
      <span key = {prev+curr} className = 'spacer-dot' />,
      curr
    ])
);
