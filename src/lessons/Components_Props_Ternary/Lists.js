import React from "react";
import User from "./components/User";

const Lists = () => {
  // const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"]

  const users = [
    {name: "Pedro", age: 21},
    {name: "Jessica", age: 25},
    {name: "Dustin", age: 22}
  ]
  
  return (
    // <div className="App">
    //   {
    //     names.map((name, key) => {
    //       return <h1 key={key}> {name} </h1>
    //     })
    //   }
    // </div>

    <div className="App">
      {users.map((user) => {
        return (
          <User user={user} />
        )
      })}
    </div>
  )
};

export default Lists;