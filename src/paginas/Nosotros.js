import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nosotros() {
  return (
    <Container className="my-5">
      <h1 className="text-success mb-4">Nosotros</h1>
      <Row className="g-4">
        <Col md={6}>
          <p>En HuertoHogar conectamos productores locales con consumidores conscientes. Promovemos prácticas sustentables y alimentos frescos.</p>
        </Col>
        <Col md={6}>
          <p>Misión, visión y valores. Certificaciones, trazabilidad y compromiso con la comunidad.</p>
        </Col>
      </Row>
    </Container>
  );
}
