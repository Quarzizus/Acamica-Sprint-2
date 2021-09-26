import React, { useContext } from "react";
import { countries, sizes, prices } from "../utils/Options";
import Select from "../components/Select";
import AppContext from "../context/AppContext";
import InputDate from "./InputDate.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Search.scss";

const Search = () => {
  const { resetFilters } = useContext(AppContext);

  return (
    <form className="Search">
      <InputDate name="dateFrom" placeholder="Fecha de inicio" />
      <InputDate name="dateTo" placeholder="Fecha de limite" />
      <Select options={countries} />
      <Select options={prices} />
      <Select options={sizes} />
      <button type="reset" onClick={resetFilters}>
        <FontAwesomeIcon icon={faTrash} />
        LIMPIAR
      </button>
    </form>
  );
};

export default Search;
