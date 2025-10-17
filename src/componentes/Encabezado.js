import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Encabezado() {
  return (
    <header className="py-5" style={{ backgroundColor: "#207F4C" }}>
      <Container className="text-center text-white">
        <h1 className="display-5 fw-bold">Frescura del campo a tu mesa</h1>
        <p className="lead mb-4">Productos locales, saludables y sustentables. Conecta con el origen de tus alimentos.</p>
        <div className="d-flex justify-content-center gap-2">
          <Button as={Link} to="/productos" variant="warning" size="lg">Explorar productos</Button>
          <Button as={Link} to="/nosotros" variant="light" size="lg">Conócenos</Button>
        </div>
      </Container>
    </header>
  );
}
