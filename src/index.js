import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const baseURL = "/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={baseURL}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);
