import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { formatoCLP } from "../datos/productos";
import { useCarrito } from "../contextos/CarritoContexto";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { items, quitarDelCarrito, limpiarCarrito, total } = useCarrito();

  return (
    <Container className="my-5">
      <h1 className="text-success mb-4">Carrito</h1>
      {items.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Precio/kg</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.codigo}>
                  <td>{it.codigo}</td>
                  <td>{it.nombre}</td>
                  <td>{formatoCLP(it.precio_por_kg)}</td>
                  <td>{it.cantidad}</td>
                  <td>{formatoCLP(it.precio_por_kg * it.cantidad)}</td>
                  <td>
                    <Button size="sm" variant="outline-danger" onClick={() => quitarDelCarrito(it.codigo)}>
                      Quitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center">
            <Button variant="outline-secondary" onClick={limpiarCarrito}>Vaciar carrito</Button>
            <h4>Total: {formatoCLP(total)}</h4>
          </div>

          <div className="mt-3 d-flex justify-content-end">
            <Button as={Link} to="/pago" variant="success">Ir a pagar</Button>
          </div>
        </>
      )}
    </Container>
  );
}
