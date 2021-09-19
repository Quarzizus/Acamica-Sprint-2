import React, { useState } from "react";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import Price from "./Price";
import "../styles/components/Card.scss";

const Card = ({ dataHotel }) => {
  const {
    name,
    photo,
    description,
    availabilityFrom,
    availabilityTo,
    city,
    country,
    rooms,
    price,
  } = dataHotel;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [dateFrom, setDateFrom] = useState(
    new Date(availabilityFrom).toLocaleDateString("es-ES", options)
  );
  const [dateTo, setDateTo] = useState(
    new Date(availabilityTo).toLocaleDateString("es-ES", options)
  );

  return (
    <article className="Card">
      <picture className="Container_collage">
        <img src={photo} alt="" />
      </picture>
      <section className="Card_info">
        <h3>{name}</h3>
        <p>{`Desde el ${dateFrom}`}</p>
        <p>{`Hasta el ${dateTo}`}</p>
        <div className="Card_wrapper-description">
          <p>{description}</p>
        </div>
      </section>
      <Info icon={faBed} content={`${city}, ${country}`} />
      <div className="Card_wrapper-info">
        <Info icon={faBed} content={`${rooms} habitaciones`} />
        <Price price={price} />
      </div>
      <button className="Card_button-reservar">Reservar</button>
    </article>
  );
};

export default Card;
