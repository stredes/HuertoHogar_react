// Importa React para definir componentes funcionales
import React from "react";

// Importa el componente Container desde React-Bootstrap
// Este se usa para centrar el contenido y aplicar márgenes automáticos.
import { Container } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: PoliticaPrivacidad
// -------------------------------------------------------
// Este componente representa la página informativa sobre
// la Política de Privacidad del sitio HuertoHogar.
// Por ahora, actúa como marcador de posición para el texto legal definitivo.
export default function PoliticaPrivacidad() {

  // Retorna la estructura visual del componente
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">

      {/* Título principal de la página */}
      {/* text-success: color verde característico del sitio / mb-3: margen inferior */}
      <h1 className="text-success mb-3">Política de Privacidad</h1>

      {/* Texto temporal hasta que se agregue el contenido final */}
      {/* text-muted: tono gris claro para indicar contenido secundario */}
      <p className="text-muted">
        Texto legal próximamente…
      </p>
    </Container>
  );
}
