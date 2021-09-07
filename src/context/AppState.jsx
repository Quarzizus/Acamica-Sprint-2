import React, { useState } from "react"; // import
import AppContext from "./AppContext";
import { hotelsData } from "./data";

const AppState = ({ children }) => {
  const [data, setData] = useState(hotelsData); // utilizamos
  const nombre = "Miguel";
  return (
    <AppContext.Provider value={{ data, setData, nombre }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
