import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { productosDestacados, formatoCLP } from "../datos/productos";
import { useCarrito } from "../contextos/CarritoContexto";

export default function DetalleProducto() {
  const { id } = useParams(); // usamos :id ~ codigo
  const { añadirAlCarrito } = useCarrito();
  const producto = productosDestacados.find((p) => p.codigo === id);

  if (!producto) {
    return (
      <Container className="my-5">
        <h1 className="mb-3">Producto no encontrado</h1>
        <p className="text-muted">Revisa el código del producto.</p>
      </Container>
    );
    }

  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col md={6}>
          {producto.imagen && (
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded shadow-sm"
            />
          )}
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center gap-2 mb-2">
            <h1 className="mb-0">{producto.nombre}</h1>
            <Badge bg="warning" text="dark">{producto.codigo}</Badge>
          </div>
          <p className="text-muted fs-5">{formatoCLP(producto.precio_por_kg)} / kg</p>
          <p className="text-muted">Stock disponible: {producto.stock}</p>
          <div className="d-flex gap-2">
            <Button onClick={() => añadirAlCarrito(producto, 1)} variant="success">Añadir al carrito</Button>
            <Button variant="outline-success">Comprar ahora</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
