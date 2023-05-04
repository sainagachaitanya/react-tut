import React from "react";

const Conditionals = () => {
  const age = 17;
  const isGreen = true;

  // General If-else Statement
  /*
  if (age>=18){
    return <h1>Over Age</h1>
  } else {
    return <h1>Under Age</h1>
  }*/

  return (
    //Ternary Operators syntax condition ? true : false
    <div className="App">
      <div className="name" style={isGreen ? {color: "green"}:{color: "red"}}>
        {age>=18?<h1>Over Age</h1>:<h1>Under Age</h1>}
      </div>

      {isGreen && <button>Green Button</button>}

    </div>
  );
};

export default Conditionals;