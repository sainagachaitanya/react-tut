import React from "react";
import { useState } from "react";

const UseState04 = () => {

  const [color, setColor] = useState("red");

  return (
    <div className="App">
      
      <button onClick={() => {
        setColor(color === "red" ? "green" : "red")
      }}>Change to Green</button>
      
      <h1 style={{color: color}}>Hi My Name is Pedro</h1>
    </div>
  )
};

export default UseState04;