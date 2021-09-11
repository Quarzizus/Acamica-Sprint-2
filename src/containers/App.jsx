import React from "react";
import Header from "../components/Header";
import "../styles/containers/App.scss";
import HotelContainer from "./HotelContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <HotelContainer />
    </div>
  );
}

export default App;
