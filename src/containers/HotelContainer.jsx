import React, { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context/AppContext";
import "../styles/containers/HotelContainer.scss";

const HotelContainer = () => {
  const { data } = useContext(AppContext);
  return !data.length ? (
    <p className="HotelContainer_empty">
      No hay hoteles con estas especificaciones
    </p>
  ) : (
    <section className="HotelContainer">
      {data.map((hotel, key) => (
        <Card dataHotel={hotel} key={key} />
      ))}
    </section>
  );
};

export default HotelContainer;
