import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Select.scss";

const Select = ({ options }) => {
  const { setFiltersValues, filtersValues, filterInputs, setData } =
    useContext(AppContext);

  useEffect(() => {
    const filterData = filterInputs();
    setData(filterData);
  }, [filtersValues]);

  return (
    <select
      name={options.name}
      className="Select"
      onChange={(e) =>
        setFiltersValues({ ...filtersValues, [options.name]: e.target.value })
      }
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
