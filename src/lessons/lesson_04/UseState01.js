import React from "react";
import { useState } from "react";

const UseState01 = () => {
  
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setAge(age-1)}>-</button> {age} <button onClick={() => setAge(age+1)}>+</button>
    </div>
  )
};

export default UseState01;