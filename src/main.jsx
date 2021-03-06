import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./containers/App";
import AppState from "./context/AppState";

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById("root")
);
