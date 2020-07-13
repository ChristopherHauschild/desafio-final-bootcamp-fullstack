import React from "react";
import ReactDOM from "react-dom";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "materialize-css/dist/css/materialize.min.css";

import "./index.css";

import App from "./App.jsx";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 4000,
  type: types.SUCCESS,
  offset: "30px",
  transition: transitions.FADE,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);
