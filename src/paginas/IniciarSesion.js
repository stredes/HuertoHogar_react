import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function IniciarSesion() {
  return (
    <Container className="my-5" style={{ maxWidth: 480 }}>
      <h1 className="text-success mb-4">Iniciar sesión</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="tu@correo.cl" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Button variant="success" type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
