import React from "react";
import { createRoot } from "react-dom/client";
import Rutas from "./rutas/Rutas";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>
);
