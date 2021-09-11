import React, { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context/AppContext";
// import { hotelsData } from "../context/data";
import "../styles/containers/HotelContainer.scss";

const HotelContainer = () => {
  const { data } = useContext(AppContext);
  return (
    <section className="HotelContainer">
      {data.map((hotel, key) => (
        <Card img={hotel.photo} key={key} />
      ))}
    </section>
  );
};

export default HotelContainer;
