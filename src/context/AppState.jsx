import React, { useState } from "react";
import AppContext from "./AppContext";
import { hotelsData } from "./data";

const AppState = ({ children }) => {
  const [data, setData] = useState(hotelsData);
  const [filtersValues, setFiltersValues] = useState({
    // valores iniciales
    countries: "Todos los paises",
    prices: "Cualquier precio",
    sizes: "Todos los tamaños",
    dateFrom: new Date().valueOf() - 3456000000,
    dateTo: new Date().valueOf() + 3456000000,
  });

  const filterInputs = () => {
    let hotels = hotelsData
      .filter((hotel) => {
        if (filtersValues.countries === "Todos los paises") {
          return hotelsData;
        } else {
          return hotel.country === filtersValues.countries;
        }
      })
      .filter((hotel) => {
        if (filtersValues.prices == "Cualquier precio") {
          return hotelsData;
        } else {
          return hotel.price === filtersValues.prices.length;
        }
      })
      .filter((hotel) => {
        if (filtersValues.sizes === "Todos los tamaños") return hotelsData;
        if (Number(filtersValues.sizes) === 30) return hotel.rooms > 20;
        if (
          hotel.rooms > Number(filtersValues.sizes - 10) &&
          hotel.rooms < Number(filtersValues.sizes)
        )
          return hotel;
      })
      .filter((date) => {
        return date.availabilityFrom >= filtersValues.dateFrom;
      })
      .filter((date) => {
        return date.availabilityTo <= filtersValues.dateTo;
      });
    return hotels;
  };

  const resetFilters = () => {
    setData(hotelsData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        resetFilters,
        filtersValues,
        setFiltersValues,
        filterInputs,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
