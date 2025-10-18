// Importa React para definir componentes funcionales
import React from "react";

// Importa el componente Container desde React-Bootstrap
// Este contenedor centra y limita el contenido horizontalmente,
// asegurando márgenes y espaciado adecuados.
import { Container } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: NoEncontrado
// -------------------------------------------------------
// Este componente representa la página de error 404 del sitio.
// Se muestra cuando el usuario intenta acceder a una ruta inexistente.
export default function NoEncontrado() {

  // Retorna la estructura visual del mensaje de error 404
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">

      {/* Título principal con el código de error */}
      {/* text-success: aplica color verde (coherente con la paleta del sitio)
          mb-3: margen inferior moderado */}
      <h1 className="text-success mb-3">404</h1>

      {/* Mensaje descriptivo informando que la página no existe */}
      <p className="text-muted">
        La página que buscas no existe.
      </p>
    </Container>
  );
}
