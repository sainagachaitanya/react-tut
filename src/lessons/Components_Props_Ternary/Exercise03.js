import React from "react";
import Planet from "./components/Planet";

const Exercise03 = () => {
  
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]

  return (
    <div className="App">
      {
        planets.map((planet) => {
          return planet.isGasPlanet && <Planet planet={planet}/>
        })
      }
    </div>
  )
};

export default Exercise03;