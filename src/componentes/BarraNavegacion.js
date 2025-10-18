// Importa React, necesario para definir componentes funcionales
import React from "react";

// Importa los componentes visuales de React-Bootstrap que se usarán en la barra de navegación
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

// Importa NavLink desde React Router para realizar navegación entre rutas sin recargar la página
import { NavLink } from "react-router-dom";

// Importa el hook personalizado useCarrito desde el contexto del carrito
// Este hook permite acceder al estado global del carrito de compras (total de productos, etc.)
import { useCarrito } from "../contextos/CarritoContexto";


// -------------------------------------------------------
// Componente principal: BarraNavegacion
// -------------------------------------------------------

// Define el componente funcional BarraNavegacion
// Este componente renderiza la barra superior del sitio, con enlaces, botones y acceso al carrito
export default function BarraNavegacion() {
  
  // Obtiene la propiedad "cantidadTotal" del contexto del carrito
  // Representa la cantidad total de productos actualmente agregados al carrito
  const { cantidadTotal } = useCarrito();

  // Retorna la estructura visual de la barra de navegación
  return (
    // Componente Navbar de React-Bootstrap
    // - expand="lg": se expande completamente en pantallas grandes
    // - bg="white": establece fondo blanco
    // - shadow-sm: agrega una sombra ligera
    // - sticky-top: fija la barra en la parte superior al hacer scroll
    // - data-bs-theme="light": define el tema claro
    <Navbar expand="lg" bg="white" className="shadow-sm sticky-top" data-bs-theme="light">
      
      {/* Contenedor central que agrupa el contenido de la barra */}
      <Container>

        {/* Marca o logotipo de la aplicación */}
        {/* Usa NavLink para navegar a la ruta principal ("/") sin recargar la página */}
        {/* fw-bold: texto en negrita / text-success: color verde */}
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-success">
          🥑 HuertoHogar
        </Navbar.Brand>

        {/* Botón de menú para pantallas pequeñas (móviles o tablets) */}
        {/* aria-controls conecta con el id del menú colapsable */}
        <Navbar.Toggle aria-controls="nav-hh" />

        {/* Contenedor que colapsa o expande según el tamaño de pantalla */}
        <Navbar.Collapse id="nav-hh">

          {/* Menú de navegación principal alineado a la derecha (ms-auto) */}
          <Nav className="ms-auto">

            {/* Cada enlace usa NavLink para manejar navegación interna */}
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/iniciar-sesion">Iniciar sesión</Nav.Link>
          </Nav>

          {/* Contenedor con los botones "Registrarse" y "Carrito" */}
          {/* d-flex: usa flexbox / gap-2: separación entre botones
              ms-lg-3: margen izquierdo en pantallas grandes
              mt-3 mt-lg-0: margen superior solo en pantallas pequeñas */}
          <div className="d-flex ms-lg-3 gap-2 mt-3 mt-lg-0">

            {/* Botón principal verde para ir al formulario de registro */}
            <Button as={NavLink} to="/registro" variant="success">
              Registrarse
            </Button>

            {/* Botón del carrito de compras */}
            {/* variant="outline-success": estilo con borde verde */}
            <Button as={NavLink} to="/carrito" variant="outline-success">
              🛒 Carrito
              
              {/* Renderizado condicional:
                  Si cantidadTotal > 0, muestra un Badge (insignia)
                  con el número de productos dentro del carrito */}
              {cantidadTotal > 0 && (
                <Badge bg="success" className="ms-1">
                  {cantidadTotal}
                </Badge>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
