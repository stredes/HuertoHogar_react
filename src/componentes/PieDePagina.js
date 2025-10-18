// Importa React para definir el componente funcional
import React from "react";

// Importa el componente Container de React-Bootstrap
// Este se usa para centrar y ajustar el contenido dentro del pie de página
import { Container } from "react-bootstrap";

// Importa Link desde React Router para la navegación interna
// Permite cambiar entre rutas sin recargar la página
import { Link } from "react-router-dom";


// -------------------------------------------------------
// Componente principal: PieDePagina
// -------------------------------------------------------
// Representa el pie de página (footer) del sitio web.
// Contiene información legal y enlaces secundarios.
export default function PieDePagina() {

  // Obtiene el año actual dinámicamente utilizando la clase Date de JavaScript
  const year = new Date().getFullYear();

  // Retorna la estructura del pie de página
  return (
    // Elemento semántico <footer>
    // bg-white: fondo blanco
    // border-top: agrega una línea superior divisoria
    // py-4: padding vertical mediano
    // mt-5: margen superior para separar del contenido anterior
    <footer className="bg-white border-top py-4 mt-5">
      
      {/* Contenedor Bootstrap para centrar y limitar el ancho del contenido */}
      {/* d-flex: usa flexbox / justify-content-between: distribuye los elementos a ambos extremos */}
      {/* flex-wrap: permite que el contenido se ajuste en pantallas pequeñas */}
      <Container className="d-flex justify-content-between flex-wrap">

        {/* Texto pequeño con derechos reservados y año dinámico */}
        <small>© {year} HuertoHogar. Todos los derechos reservados.</small>

        {/* Bloque con enlaces secundarios */}
        <div>
          {/* Enlace a la política de privacidad */}
          {/* text-muted: color gris / me-3: margen a la derecha */}
          <Link to="/privacidad" className="text-muted me-3">
            Privacidad
          </Link>

          {/* Enlace a los términos y condiciones */}
          <Link to="/terminos" className="text-muted me-3">
            Términos
          </Link>

          {/* Enlace a la sección de accesibilidad */}
          <Link to="/accesibilidad" className="text-muted">
            Accesibilidad
          </Link>
        </div>
      </Container>
    </footer>
  );
}
