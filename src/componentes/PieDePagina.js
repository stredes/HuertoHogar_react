import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PieDePagina() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-top py-4 mt-5">
      <Container className="d-flex justify-content-between flex-wrap">
        <small>© {year} HuertoHogar. Todos los derechos reservados.</small>
        <div>
          <Link to="/privacidad" className="text-muted me-3">Privacidad</Link>
          <Link to="/terminos" className="text-muted me-3">Términos</Link>
          <Link to="/accesibilidad" className="text-muted">Accesibilidad</Link>
        </div>
      </Container>
    </footer>
  );
}
