// Importa React para definir componentes funcionales
import React from "react";

// Importa componentes de React-Bootstrap:
// - Container: centra el contenido y aplica márgenes horizontales automáticos.
// - Row y Col: definen una estructura de grilla responsiva.
import { Container, Row, Col } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: Nosotros
// -------------------------------------------------------
// Este componente representa la página informativa "Nosotros" del sitio HuertoHogar.
// Expone la misión, visión y compromiso de la marca con la sostenibilidad y los productores locales.
export default function Nosotros() {

  // Retorna la estructura visual de la página
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">

      {/* Título principal de la página */}
      {/* text-success: color verde institucional / mb-4: margen inferior */}
      <h1 className="text-success mb-4">Nosotros</h1>

      {/* Estructura de grilla responsiva con dos columnas */}
      {/* g-4: separación uniforme entre columnas */}
      <Row className="g-4">

        {/* Columna izquierda: texto sobre propósito y conexión local */}
        <Col md={6}>
          <p>
            En HuertoHogar conectamos productores locales con consumidores
            conscientes. Promovemos prácticas sustentables y alimentos frescos.
          </p>
        </Col>

        {/* Columna derecha: información complementaria sobre misión y valores */}
        <Col md={6}>
          <p>
            Misión, visión y valores. Certificaciones, trazabilidad y compromiso
            con la comunidad.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
