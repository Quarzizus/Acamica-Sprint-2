import React from "react";
import "../styles/components/Select.scss";

const Select = ({ options }) => {
  return (
    <select name="Select" className="Select">
      {Object.values(options).map((o, i) => (
        <React.Fragment key={i}>
          <option value={o}>{o}</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default Select;
