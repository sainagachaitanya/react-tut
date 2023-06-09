import React from "react";
import { useState } from "react";

const UseState02 = () => {
  
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <input type={"text"} onChange={(event) => setInput(event.target.value)}/>
      {input}
    </div>
  )
};

export default UseState02;