// Importa React para definir el componente funcional
import React from "react";

// Importa componentes de React-Bootstrap:
// - Container: para centrar y limitar el ancho del contenido
// - Form: estructura base para el formulario
// - Button: botón estilizado para enviar el formulario
import { Container, Form, Button } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: Registro
// -------------------------------------------------------
// Este componente representa la página de registro de usuario del sitio HuertoHogar.
// Contiene un formulario simple para capturar datos básicos de creación de cuenta.
export default function Registro() {

  // Retorna la estructura visual del formulario de registro
  return (
    // Contenedor principal con margen vertical (my-5)
    // style={{ maxWidth: 520 }} limita el ancho máximo del formulario para una mejor legibilidad
    <Container className="my-5" style={{ maxWidth: 520 }}>
      
      {/* Título principal del formulario */}
      <h1 className="text-success mb-4">Registro</h1>

      {/* Formulario de registro */}
      <Form>

        {/* Campo de entrada: Nombre del usuario */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required />  {/* Campo obligatorio */}
        </Form.Group>

        {/* Campo de entrada: Correo electrónico */}
        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control 
            type="email"   // Valida que la entrada tenga formato de correo
            required 
          />
        </Form.Group>

        {/* Campo de entrada: Contraseña */}
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password"  // Entrada oculta para contraseñas
            required 
          />
        </Form.Group>

        {/* Botón de envío del formulario */}
        {/* variant="success": color verde institucional */}
        <Button variant="success" type="submit">
          Crear cuenta
        </Button>
      </Form>
    </Container>
  );
}
