import React from "react";
import IMG from "../images/alto-atacama.jpg";
const Card = () => {
  return (
    <article className="Card">
      <picture className="Container_collage">
        <img src={IMG} alt="" />
      </picture>
    </article>
  );
};

export default Card;
