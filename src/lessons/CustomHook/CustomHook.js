import React from "react";
import { useToggle } from "./useToggle";

const CustomHook = () => {

  const [isVisible, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  )
};

export default CustomHook;