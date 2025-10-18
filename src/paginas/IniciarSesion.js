// Importa React para definir componentes funcionales
import React from "react";

// Importa componentes desde React-Bootstrap:
// - Container: para centrar y limitar el contenido
// - Form: para crear formularios estilizados
// - Button: para generar botones con variantes de color
import { Container, Form, Button } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: IniciarSesion
// -------------------------------------------------------
// Este componente representa la página de inicio de sesión del usuario.
// Contiene un formulario básico para ingresar correo y contraseña.
export default function IniciarSesion() {

  // Retorna la estructura visual del formulario de inicio de sesión
  return (
    // Contenedor centrado con margen vertical (my-5)
    // style={{ maxWidth: 480 }}: limita el ancho máximo para mantener el diseño compacto
    <Container className="my-5" style={{ maxWidth: 480 }}>
      
      {/* Título principal de la página */}
      <h1 className="text-success mb-4">Iniciar sesión</h1>

      {/* Formulario de inicio de sesión */}
      <Form>
        
        {/* Grupo de campo: correo electrónico */}
        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"                // Tipo de input: correo electrónico
            placeholder="tu@correo.cl"  // Texto de ayuda
            required                    // Campo obligatorio
          />
        </Form.Group>

        {/* Grupo de campo: contraseña */}
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"             // Campo de entrada tipo contraseña
            required                    // Campo obligatorio
          />
        </Form.Group>

        {/* Botón principal de envío del formulario */}
        {/* variant="success": color verde / type="submit": activa el envío */}
        <Button variant="success" type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
