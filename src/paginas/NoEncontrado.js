import React from "react";
import { Container } from "react-bootstrap";

export default function NoEncontrado() {
  return (
    <Container className="my-5">
      <h1 className="text-success mb-3">404</h1>
      <p className="text-muted">La página que buscas no existe.</p>
    </Container>
  );
}
