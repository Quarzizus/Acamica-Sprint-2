import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/containers/App.scss";
import HotelContainer from "./HotelContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <HotelContainer />
    </div>
  );
}

export default App;
