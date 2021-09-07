import React from "react";
import "../styles/components/Card.scss";

const Card = ({ img }) => {
  return (
    <article className="Card">
      <picture className="Container_collage">
        <img src={img} alt="" />
      </picture>
    </article>
  );
};

export default Card;
