import React, { useState } from "react";
import AppContext from "./AppContext";
import { hotelsData } from "./data";

const AppState = ({ children }) => {
  const [data, setData] = useState(hotelsData);

  const countriesFilter = (country) => {
    setData(
      data.filter((hotel) => {
        if (country === "Todos los paises") {
          return hotelsData;
        } else {
          return hotel.country === country;
        }
      })
    );
  };

  const pricesFilter = (price) => {
    setData(
      data.filter((hotel) => {
        if (price == "Cualquier precio") {
          return hotelsData;
        } else {
          return hotel.price === price.length;
        }
      })
    );
  };

  const sizesFilter = (size) => {
    setData(
      data.filter((hotel) => {
        if (Number(size) === 0) return hotelsData;
        if (Number(size) === 30) return hotel.rooms > 20;
        if (hotel.rooms > Number(size - 10) && hotel.rooms < Number(size))
          return hotel;
      })
    );
  };

  const dateFrom = (dateFrom) => {
    setData(
      data.filter((date) => {
        return date.availabilityFrom >= dateFrom.valueOf();
      })
    );
  };

  const dateTo = (dateTo) => {
    setData(
      data.filter((date) => {
        return date.availabilityTo <= dateTo.valueOf();
      })
    );
  };

  const resetFilters = () => {
    setData(hotelsData);
  };
  return (
    <AppContext.Provider
      value={{
        data,
        countriesFilter,
        pricesFilter,
        sizesFilter,
        dateFrom,
        dateTo,
        resetFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
