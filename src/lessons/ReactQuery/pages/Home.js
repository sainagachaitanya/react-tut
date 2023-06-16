import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {

  const { 
    data: catData, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = useQuery(["catfact"], async () => {
    const res = await Axios.get(`https://catfact.ninja/fact`)
    return res.data;
  })

  if (isLoading) {
    return "Loading a random cat fact..."
  }

  if (isError) {
    return error.message;
  }

  return (
    <div>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update Fact</button>
    </div>
  )
};

export default Home;