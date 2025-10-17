import React from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCarrito } from "../contextos/CarritoContexto";

export default function BarraNavegacion() {
  const { cantidadTotal } = useCarrito();

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm sticky-top" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-success">
          🥑 HuertoHogar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-hh" />
        <Navbar.Collapse id="nav-hh">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/iniciar-sesion">Iniciar sesión</Nav.Link>
          </Nav>

          <div className="d-flex ms-lg-3 gap-2 mt-3 mt-lg-0">
            <Button as={NavLink} to="/registro" variant="success">Registrarse</Button>
            <Button as={NavLink} to="/carrito" variant="outline-success">
              🛒 Carrito {cantidadTotal > 0 && <Badge bg="success" className="ms-1">{cantidadTotal}</Badge>}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
