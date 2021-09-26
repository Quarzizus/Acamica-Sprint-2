import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const InputDate = ({ name, placeholder }) => {
  const [date, setDate] = useState(false);
  const { filtersValues, setFiltersValues, filterInputs, setData } =
    useContext(AppContext);

  useEffect(() => {
    const filterData = filterInputs();
    setData(filterData);
  }, [filtersValues]);

  return (
    <>
      {date ? (
        <input
          type="date"
          onChange={(e) =>
            setFiltersValues({
              ...filtersValues,
              [name]: e.target.valueAsDate.valueOf(),
            })
          }
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setDate(!date)}
        />
      )}
    </>
  );
};

export default InputDate;
