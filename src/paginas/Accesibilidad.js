// Importa React, necesario para definir componentes funcionales
import React from "react";

// Importa el componente Container desde React-Bootstrap
// Se utiliza para envolver y centrar el contenido de la página
import { Container } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: Accesibilidad
// -------------------------------------------------------
// Este componente representa la página de "Accesibilidad" del sitio web.
// Su propósito es mostrar el compromiso de la empresa con la accesibilidad,
// aunque en esta versión actúa como una sección placeholder.
export default function Accesibilidad() {

  // Retorna la estructura visual del componente
  return (
    // Contenedor Bootstrap con margen vertical (my-5)
    <Container className="my-5">
      
      {/* Título principal de la sección en color verde (text-success)
          mb-3: margen inferior moderado */}
      <h1 className="text-success mb-3">Accesibilidad</h1>

      {/* Texto descriptivo o mensaje temporal */}
      {/* text-muted: aplica color gris tenue al texto */}
      <p className="text-muted">
        Compromisos de accesibilidad próximamente…
      </p>
    </Container>
  );
}
