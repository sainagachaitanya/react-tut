import React from "react";
import { useState } from "react";

const UseState03 = () => {

  const [showtext, setShowText] = useState(true);

  return (
    <div className="App">
      
      <button onClick={() => {
        setShowText(!showtext)
      }}>Show/Hide</button>
      
      {showtext && <h1>Hi My Name is Pedro</h1>}
    </div>
  )
};

export default UseState03;