import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function ConfirmacionPedido() {
  const { pedidoId } = useParams();

  return (
    <Container className="my-5 text-center">
      <h1 className="text-success mb-3">¡Pedido confirmado!</h1>
      <p className="text-muted">Número de pedido: <strong>{pedidoId}</strong></p>
      <Button as={Link} to="/productos" variant="success">Seguir comprando</Button>
    </Container>
  );
}
