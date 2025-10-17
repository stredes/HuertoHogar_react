import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function Contacto() {
  const [enviando, setEnviando] = useState(false);
  const [ok, setOk] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    // TODO: enviar datos al backend
    setTimeout(() => {
      setOk(true);
      setEnviando(false);
    }, 800);
  };

  return (
    <Container className="my-5">
      <h1 className="text-success mb-4">Contacto</h1>
      <Row className="g-4">
        <Col md={6}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required placeholder="Tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" required placeholder="tu@correo.cl" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} required placeholder="¿Cómo te ayudamos?" />
            </Form.Group>
            <Button type="submit" variant="success" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
          {ok && <Alert className="mt-3" variant="success">¡Mensaje enviado!</Alert>}
        </Col>
        <Col md={6}>
          <div className="ratio ratio-16x9 rounded shadow-sm">
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
