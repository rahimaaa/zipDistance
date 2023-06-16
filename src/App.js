import logo from "./logo.svg";
import "./App.css";
import Zip from "./components/zip";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [zipCode1, setZipCode1] = useState("");
  const [zipCode2, setZipCode2] = useState("");
  const [distanceState, setDistanceState] = useState([]);

  const handleZipCode1 = (event) => {
    setZipCode1(event.target.value);
  };

  const handleZipCode2 = (event) => {
    setZipCode2(event.target.value);
  };

  const getDistance = async () => {
    try {
      const list = await axios.get(
        `https://zip-api.eu/api/v1/distance/US-${zipCode1}/US-${zipCode2}/mi`
      );
       console.log(list)
      setDistanceState(list.data.distance);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <input placeholder = "enter zip code 1" onChange={handleZipCode1} />
      <input placeholder = "enter zip code 2" onChange={handleZipCode2} />
      <button onClick={getDistance}>Enter</button>

      <Zip distanceState={distanceState} />
    </div>
  );
}

export default App;

