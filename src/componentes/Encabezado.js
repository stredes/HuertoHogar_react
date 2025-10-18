// Importa React, necesario para crear componentes funcionales
import React from "react";

// Importa componentes visuales desde React-Bootstrap
// - Container: para centrar y limitar el contenido horizontalmente
// - Button: para crear botones estilizados según el tema Bootstrap
import { Container, Button } from "react-bootstrap";

// Importa el componente Link desde React Router para la navegación interna
// Permite cambiar de página sin recargar la aplicación (SPA)
import { Link } from "react-router-dom";


// -------------------------------------------------------
// Componente principal: Encabezado
// -------------------------------------------------------
// Este componente representa la sección de cabecera (header) de la página de inicio.
// Muestra un título principal, una descripción y botones de acción.
export default function Encabezado() {
  // Retorna la estructura visual del encabezado
  return (
    // Etiqueta <header> semántica para la sección superior de la página
    // py-5: padding vertical grande
    // style={{ backgroundColor: "#207F4C" }}: aplica un color de fondo verde personalizado
    <header className="py-5" style={{ backgroundColor: "#207F4C" }}>
      
      {/* Contenedor centralizado con texto en color blanco */}
      <Container className="text-center text-white">

        {/* Título principal grande y en negrita */}
        {/* display-5: tamaño grande del texto / fw-bold: peso de fuente en negrita */}
        <h1 className="display-5 fw-bold">
          Frescura del campo a tu mesa
        </h1>

        {/* Subtítulo descriptivo del encabezado */}
        {/* lead: texto más destacado / mb-4: margen inferior moderado */}
        <p className="lead mb-4">
          Productos locales, saludables y sustentables. Conecta con el origen de tus alimentos.
        </p>

        {/* Contenedor con botones alineados horizontalmente al centro */}
        {/* d-flex: usa flexbox / justify-content-center: centra horizontalmente / gap-2: espacio entre botones */}
        <div className="d-flex justify-content-center gap-2">

          {/* Botón amarillo que redirige a la sección de productos */}
          {/* as={Link}: convierte el botón en un enlace React Router */}
          {/* to="/productos": define la ruta destino */}
          {/* variant="warning": color amarillo Bootstrap / size="lg": tamaño grande */}
          <Button as={Link} to="/productos" variant="warning" size="lg">
            Explorar productos
          </Button>

          {/* Botón blanco que redirige a la sección "Nosotros" */}
          {/* variant="light": color claro (blanco) */}
          <Button as={Link} to="/nosotros" variant="light" size="lg">
            Conócenos
          </Button>
        </div>
      </Container>
    </header>
  );
}
