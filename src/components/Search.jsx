import React, { useContext } from "react";
import { countries, sizes, prices } from "../utils/Options";
import Select from "../components/Select";
import AppContext from "../context/AppContext";
import InputDate from "./InputDate.jsx";
import "../styles/components/Search.scss";

const Search = () => {
  const { resetFilters, filtersValues } = useContext(AppContext);

  return (
    <form className="Search">
      <InputDate name="dateFrom" />
      <InputDate name="dateTo" />
      <Select options={countries} />
      <Select options={prices} />
      <Select options={sizes} />
      <button type="reset" onClick={resetFilters}>
        ELIMINAR
      </button>
      {console.log(filtersValues)}
    </form>
  );
};

export default Search;
