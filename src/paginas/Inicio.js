// Importa React para definir el componente funcional
import React from "react";

// Importa los componentes Encabezado y GrillaDestacados
// desde el índice central de la carpeta "componentes"
// - Encabezado: muestra el banner principal con título y botones
// - GrillaDestacados: muestra una cuadrícula de productos destacados
import { Encabezado, GrillaDestacados } from "../componentes";


// -------------------------------------------------------
// Componente principal: Inicio
// -------------------------------------------------------
// Este componente representa la página de inicio del sitio HuertoHogar.
// Combina las secciones principales del home: el encabezado y la grilla de productos.
export default function Inicio() {

  // Retorna la estructura de la página inicial
  return (
    <>
      {/* Sección superior: encabezado con mensaje de bienvenida y botones de acción */}
      <Encabezado />

      {/* Sección inferior: muestra los productos destacados del catálogo */}
      <GrillaDestacados />
    </>
  );
}
