// Importa React para definir el componente funcional
import React from "react";

// Importa el componente Container desde React-Bootstrap
// Este componente centra y limita el ancho del contenido de forma responsiva
import { Container } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: TerminosCondiciones
// -------------------------------------------------------
// Este componente representa la página legal de "Términos y Condiciones"
// del sitio web HuertoHogar. En esta versión inicial actúa como un
// marcador de posición (placeholder) hasta que se agregue el texto legal definitivo.
export default function TerminosCondiciones() {

  // Retorna la estructura visual del componente
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">

      {/* Título principal de la sección */}
      {/* text-success: color verde institucional / mb-3: margen inferior */}
      <h1 className="text-success mb-3">Términos y Condiciones</h1>

      {/* Texto temporal hasta que se integre el contenido final */}
      {/* text-muted: color gris tenue para indicar información secundaria */}
      <p className="text-muted">
        Texto legal próximamente…
      </p>
    </Container>
  );
}
