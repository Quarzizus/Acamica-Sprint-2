import React, { useContext } from "react";
import { countries, sizes, prices } from "../utils/Options";
import Select from "../components/Select";
import AppContext from "../context/AppContext";
import InputDate from "./InputDate.jsx";
import "../styles/components/Search.scss";

const Search = () => {
  const { countriesFilter, pricesFilter, sizesFilter, dateFrom, dateTo } =
    useContext(AppContext);
  return (
    <form className="Search">
      <InputDate filter={dateFrom} />
      <InputDate filter={dateTo} />
      <Select options={countries} filter={countriesFilter} />
      <Select options={prices} filter={pricesFilter} />
      <Select options={sizes} filter={sizesFilter} />
      <button type="reset">ELIMINAR</button>
    </form>
  );
};

export default Search;
