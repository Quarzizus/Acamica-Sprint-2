import React from "react";
import Search from "./Search";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header_slogan">
        <h1>Hoteles</h1>
        <h4>En cualquier fecha</h4>
        <h4>En cualquier país</h4>
        <h4>En cualquier precio</h4>
        <h4>En cualquier tamaño</h4>
      </div>
      <Search />
    </header>
  );
};

export default Header;
