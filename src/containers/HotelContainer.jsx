import React from "react";
import Card from "../components/Card";
import { hotelsData } from "../context/data";
import "../styles/containers/HotelContainer.scss";

const HotelContainer = () => {
  return (
    <section className="HotelContainer">
      {hotelsData.map((hotel, key) => (
        <Card img={hotel.photo} key={key} />
      ))}
    </section>
  );
};

export default HotelContainer;
