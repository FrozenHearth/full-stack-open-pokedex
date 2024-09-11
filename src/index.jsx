import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>
);
