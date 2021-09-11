import React from "react";
import "../styles/components/Select.scss";

const Select = ({ options, filter }) => {
  return (
    <select
      name={options.name}
      className="Select"
      onClick={(e) => filter(e.target.value)}
    >
      {Object.entries(options.options).map(([key, value], i) => (
        <React.Fragment key={i}>
          {options.name === "sizes" ? (
            <option value={key}>{value}</option>
          ) : (
            <option value={value}>{value}</option>
          )}
        </React.Fragment>
      ))}
    </select>
  );
};

export default Select;
