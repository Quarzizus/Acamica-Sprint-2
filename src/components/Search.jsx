import React from "react";
import { hotelsData } from "../context/data.js";
import { paises, tamaños, precios } from "../utils/Options";
import Select from "../components/Select";
import InputDate from "./InputDate.jsx";
import "../styles/components/Search.scss";

const Search = () => {
  return (
    <form className="Search">
      <InputDate />
      <InputDate />
      <Select options={paises} />
      <Select options={precios} />
      <Select options={tamaños} />
      <button type="reset">ELIMINAR</button>
    </form>
  );
};

export default Search;
