import React from "react";
import Axios from "axios";
import { useState } from "react";

const PredictAge = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const FetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age);
    })
  }

  return (
    <div>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <button onClick={FetchAge}>Predict Age</button>
      <h1>Predicted Age: {age}</h1>
    </div>
  )
};

export default PredictAge;
