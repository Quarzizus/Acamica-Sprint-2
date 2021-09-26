import React, { useContext, useState } from "react";
import Search from "./Search";
import "../styles/components/Header.scss";
import AppContext from "../context/AppContext";

const Header = () => {
  const { filtersValues } = useContext(AppContext);
  const { countries, prices, sizes, dateFrom, dateTo } = filtersValues;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <header className="Header">
      <div className="Header_slogan">
        <div className="Slogan">
          <h1>Hoteles</h1>
          <h4>En cualquier fecha</h4>
          <h4>En cualquier país</h4>
          <h4>En cualquier precio</h4>
          <h4>En cualquier tamaño</h4>
        </div>
        <section className="ShowFilters">
          <h3>Filtros utilizados</h3>
          <ul>
            <li>
              Fecha inicio:
              {new Date(dateFrom).toLocaleString("es-ES", options)}
            </li>
            <li>
              Fecha limite:
              {new Date(dateTo).toLocaleString("es-ES", options)}
            </li>
            <li>País: {countries}</li>
            <li>Precio: {prices}</li>
            <li>Tamaño: {sizes}</li>
          </ul>
        </section>
      </div>
      <Search />
    </header>
  );
};

export default Header;
