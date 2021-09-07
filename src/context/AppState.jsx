import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [data, setData] = useState("Holiwi");

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
