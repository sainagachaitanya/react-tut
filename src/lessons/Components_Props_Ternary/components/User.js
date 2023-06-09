import React from "react";

const User = ({user}) => {
  return (
    <div className="App">
      {user.name} {user.age}
    </div>
  )
};

export default User;