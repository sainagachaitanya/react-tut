import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../StateManagement";

const ChangeAbout = () => {
  
  const {setUsername} = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input onChange={e => setNewUsername(e.target.value)}/>
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  )
};

export default ChangeAbout;