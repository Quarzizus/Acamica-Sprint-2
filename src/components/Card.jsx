import React, { useState } from "react";
import "../styles/components/Card.scss";

const Card = ({ dataHotel }) => {
  const { name, photo, description, availabilityFrom, availabilityTo } =
    dataHotel;

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
      <div className="Card_info">
        <h3>{name}</h3>
        <p>{`Desde el ${dateFrom}`}</p>
        <p>{`Hasta el ${dateTo}`}</p>
        <div className="Card_wrapper-description">
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
