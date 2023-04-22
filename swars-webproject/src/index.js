import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MovieWebPage from "./components/MovieWebPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieWebPage />
  </React.StrictMode>
);
