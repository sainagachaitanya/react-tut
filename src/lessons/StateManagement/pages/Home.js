import React from "react";
import { useContext } from "react";
import { AppContext } from "../StateManagement";

const Home = () => {
  const {username} = useContext(AppContext); 
  return (
  <div>
    This is the Home Page of {username}!
  </div>
  )
};

export default Home;