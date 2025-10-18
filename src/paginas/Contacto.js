// Importa React y el hook useState para manejar el estado local del formulario
import React, { useState } from "react";

// Importa componentes de React-Bootstrap:
// - Container: contenedor principal centrado
// - Row, Col: sistema de grillas responsivo
// - Form: estructura y controles de formulario
// - Button: botón estilizado
// - Alert: mensaje visual de confirmación o advertencia
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: Contacto
// -------------------------------------------------------
// Este componente representa la página de contacto del sitio web.
// Permite a los usuarios enviar consultas o comentarios mediante un formulario.
export default function Contacto() {

  // Estado para indicar si el formulario se está enviando
  const [enviando, setEnviando] = useState(false);

  // Estado para mostrar la confirmación de envío exitoso
  const [ok, setOk] = useState(false);

  // -------------------------------------------------------
  // Función: onSubmit
  // -------------------------------------------------------
  // Maneja el envío del formulario:
  // - Previene el comportamiento por defecto del navegador
  // - Simula el envío de datos al backend
  // - Muestra un mensaje de éxito temporalmente
  const onSubmit = (e) => {
    e.preventDefault();         // Evita que la página se recargue
    setEnviando(true);          // Activa el estado de “enviando”

    // TODO: enviar datos reales al backend (API o servicio)
    // Simula un retraso de 800 ms antes de marcar el envío como exitoso
    setTimeout(() => {
      setOk(true);              // Muestra alerta de confirmación
      setEnviando(false);       // Restaura el estado inicial
    }, 800);
  };

  // -------------------------------------------------------
  // Renderizado del componente
  // -------------------------------------------------------
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">
      
      {/* Título principal de la página */}
      <h1 className="text-success mb-4">Contacto</h1>

      {/* Estructura de grilla con dos columnas: formulario y mapa */}
      <Row className="g-4">
        
        {/* Columna izquierda: formulario de contacto */}
        <Col md={6}>
          {/* Formulario controlado por la función onSubmit */}
          <Form onSubmit={onSubmit}>

            {/* Campo: Nombre */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required placeholder="Tu nombre" />
            </Form.Group>

            {/* Campo: Correo */}
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="tu@correo.cl"
              />
            </Form.Group>

            {/* Campo: Mensaje */}
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                required
                placeholder="¿Cómo te ayudamos?"
              />
            </Form.Group>

            {/* Botón de envío del formulario */}
            {/* variant="success": color verde / disabled mientras se envía */}
            <Button type="submit" variant="success" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar"}
            </Button>
          </Form>

          {/* Alerta de confirmación visible tras el envío exitoso */}
          {ok && (
            <Alert className="mt-3" variant="success">
              ¡Mensaje enviado!
            </Alert>
          )}
        </Col>

        {/* Columna derecha: mapa de ubicación */}
        <Col md={6}>
          {/* Contenedor con proporción 16:9 (ratio) y bordes redondeados */}
          <div className="ratio ratio-16x9 rounded shadow-sm">
            {/* Iframe de Google Maps apuntando a Santiago de Chile */}
            <iframe
              title="Mapa"
              src="https://maps.google.com/maps?q=Santiago%20de%20Chile&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
