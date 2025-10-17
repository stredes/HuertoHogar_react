import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatoCLP } from "../datos/productos";
import { useCarrito } from "../contextos/CarritoContexto";

export default function TarjetaProducto({ producto }) {
  const { añadirAlCarrito } = useCarrito();

  return (
    <Card className="h-100 shadow-sm border-0">
      {producto.imagen && (
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          style={{ objectFit: "cover", height: 220 }}
          loading="lazy"
        />
      )}
      <Card.Body>
        <span className="badge text-bg-warning">{producto.codigo}</span>
        <Card.Title className="mt-2">{producto.nombre}</Card.Title>
        <Card.Text className="mb-1 text-muted">{formatoCLP(producto.precio_por_kg)} / kg</Card.Text>
        <small className="text-muted">Stock: {producto.stock}</small>
      </Card.Body>
      <Card.Footer className="bg-white border-0 pb-4 d-flex gap-2">
        <Button as={Link} to={`/productos/${producto.codigo}`} variant="success" className="flex-fill">Ver</Button>
        <Button onClick={() => añadirAlCarrito(producto, 1)} variant="success" className="flex-fill">Añadir</Button>
      </Card.Footer>
    </Card>
  );
}
