import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useCarrito } from "../contextos/CarritoContexto";
import { formatoCLP } from "../datos/productos";
import { Link } from "react-router-dom";

export default function Pago() {
  const { items, total } = useCarrito();

  return (
    <Container className="my-5">
      <h1 className="text-success mb-4">Pago</h1>
      <Row className="g-4">
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Datos de entrega</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Comuna</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control required />
                </Form.Group>
                <Button variant="success" as={Link} to="/confirmacion/HH-0001">Confirmar pedido</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Resumen</h5>
              <ul className="mb-3">
                {items.map((it) => (
                  <li key={it.codigo}>
                    {it.nombre} x {it.cantidad} — {formatoCLP(it.precio_por_kg * it.cantidad)}
                  </li>
                ))}
              </ul>
              <h4>Total: {formatoCLP(total)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
