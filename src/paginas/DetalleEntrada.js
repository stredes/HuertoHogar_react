import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function DetalleEntrada() {
  const { slug } = useParams();
  return (
    <Container className="my-5">
      <h1 className="text-success">Entrada: {slug}</h1>
      <p className="text-muted">Contenido del blog próximamente…</p>
    </Container>
  );
}
