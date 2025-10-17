import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TarjetaProducto from "./TarjetaProducto";
import { productosDestacados } from "../datos/productos";

export default function GrillaDestacados() {
  return (
    <Container className="my-5" id="productos">
      <h2 className="text-success fw-bold mb-4">Productos destacados</h2>
      <Row className="g-4">
        {productosDestacados.map((p) => (
          <Col key={p.codigo} xs={12} md={6} lg={4}>
            <TarjetaProducto producto={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
