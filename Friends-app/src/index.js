import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root")); // DOM
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// DOM ==> load ==> component App -- React Element
// Boiler plate - empty fragment react fragment
