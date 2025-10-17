import React, { useMemo, useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import TarjetaProducto from "../componentes/TarjetaProducto";
import { productosDestacados, formatoCLP } from "../datos/productos";

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [soloStock, setSoloStock] = useState(false);

  const productos = useMemo(() => {
    return productosDestacados.filter((p) => {
      const coincideTexto =
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.codigo.toLowerCase().includes(busqueda.toLowerCase());
      const okPrecio = precioMax ? p.precio_por_kg <= Number(precioMax) : true;
      const okStock = soloStock ? p.stock > 0 : true;
      return coincideTexto && okPrecio && okStock;
    });
  }, [busqueda, precioMax, soloStock]);

  const maxCatalogo = Math.max(...productosDestacados.map((p) => p.precio_por_kg));

  return (
    <Container className="my-5">
      <h1 className="text-success mb-4">Productos</h1>

      {/* Filtros */}
      <Row className="g-3 mb-4">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>Buscar</InputGroup.Text>
            <Form.Control
              placeholder="Nombre o código"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={3}>
          <InputGroup>
            <InputGroup.Text>Precio máx</InputGroup.Text>
            <Form.Control
              type="number"
              min={0}
              placeholder={formatoCLP(maxCatalogo)}
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <Form.Check
            type="switch"
            id="solo-stock"
            label="Solo con stock"
            checked={soloStock}
            onChange={(e) => setSoloStock(e.target.checked)}
          />
        </Col>
      </Row>

      {/* Grilla */}
      <Row className="g-4">
        {productos.map((p) => (
          <Col key={p.codigo} xs={12} md={6} lg={4}>
            <TarjetaProducto producto={p} />
          </Col>
        ))}
        {productos.length === 0 && (
          <Col xs={12}>
            <p className="text-muted">No hay productos que coincidan con los filtros.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}
