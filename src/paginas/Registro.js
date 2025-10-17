import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Registro() {
  return (
    <Container className="my-5" style={{ maxWidth: 520 }}>
      <h1 className="text-success mb-4">Registro</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Button variant="success" type="submit">Crear cuenta</Button>
      </Form>
    </Container>
  );
}
