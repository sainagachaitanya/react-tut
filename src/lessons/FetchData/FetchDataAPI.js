import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

const FetchDataAPI = () => {

  const [catfact, setCatfact] = useState("");

  const GetCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    })
  }

  useEffect(() => {
    GetCatFact();
  }, [])

  return (
    <div>
      <button onClick={GetCatFact}>Generate Cat Fact</button>
      <p>{catfact}</p>
    </div>
  )
};

export default FetchDataAPI;
