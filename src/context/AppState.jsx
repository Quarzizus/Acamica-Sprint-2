import React, { useState } from "react";
import AppContext from "./AppContext";
import { hotelsData } from "./data";

const AppState = ({ children }) => {
  const [data, setData] = useState(hotelsData);

  const countriesFilter = (country) => {
    setData(
      hotelsData.filter((hotel) => {
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
      hotelsData.filter((hotel) => {
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
      hotelsData.filter((hotel) => {
        if (Number(size) === 0) return hotelsData;
        if (Number(size) === 30) return hotel.rooms > 20;
        if (hotel.rooms > Number(size - 10) && hotel.rooms < Number(size))
          return hotel;
      })
    );
  };
  return (
    <AppContext.Provider
      value={{ data, countriesFilter, pricesFilter, sizesFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
