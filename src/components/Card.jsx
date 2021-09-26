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

  return (
    <article className="Card">
      <picture className="Container_collage">
        <img src={photo} alt="" />
      </picture>
      <section className="Card_info">
        <h3>{name}</h3>
        <p>
          Desde el {new Date(availabilityFrom).toLocaleString("es-ES", options)}
        </p>
        <p>
          Hasta el {new Date(availabilityTo).toLocaleString("es-ES", options)}
        </p>
        <div className="Card_wrapper-description">
          <p>{description}</p>
        </div>
      </section>
      <Info icon={faBed} content={`${city}, ${country}`} />
      <div className="Card_wrapper-info">
        <Info icon={faBed} content={`${rooms} habitaciones`} />
        <Price price={price} />
      </div>
      <button
        className="Card_button-reservar"
        onClick={() => alert("Reservado con exito :3")}
      >
        Reservar
      </button>
    </article>
  );
};

export default Card;
