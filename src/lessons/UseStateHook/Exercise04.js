import React from "react";
import { useState } from "react";

const Exercise04 = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count-1)}>Decrease</button> 
      <button onClick={() => setCount(0)}>Zero</button>
      <button onClick={() => setCount(count+1)}>Increase</button>

      {count}
    </div>
  )
};

export default Exercise04;