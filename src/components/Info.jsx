import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/Info.scss";

const Info = ({ icon, content }) => {
  return (
    <div className="Info">
      <picture>
        <FontAwesomeIcon icon={icon} />
      </picture>
      <p>{content}</p>
    </div>
  );
};

export default Info;
