import React from "react";

const Planet = ({planet}) => {
  return (
    <div>
      <strong>{planet.name}</strong> is visible because it's a Gaseous Planet
    </div>
  )
};

export default Planet;