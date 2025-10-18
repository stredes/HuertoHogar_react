// Importa React para definir componentes funcionales
import React from "react";

// Importa componentes de React-Bootstrap:
// - Container: contenedor centrado con márgenes automáticos
// - Row y Col: sistema de grillas responsivo
// - Form: estructura de formulario para datos de envío
// - Button: botón estilizado
// - Card: contenedor visual con borde y sombra
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// Importa el hook del contexto global del carrito para obtener los productos y el total
import { useCarrito } from "../contextos/CarritoContexto";

// Importa la función de formato de moneda chilena (CLP)
import { formatoCLP } from "../datos/productos";

// Importa Link desde React Router para redirigir sin recargar la página
import { Link } from "react-router-dom";


// -------------------------------------------------------
// Componente principal: Pago
// -------------------------------------------------------
// Este componente representa la página de pago y confirmación de pedido.
// Contiene dos secciones:
// 1. Formulario de datos de entrega.
// 2. Resumen de los productos del carrito.
export default function Pago() {

  // Extrae los productos (items) y el total desde el contexto del carrito.
  const { items, total } = useCarrito();

  // Retorna la estructura visual del componente
  return (
    // Contenedor con margen vertical (my-5)
    <Container className="my-5">

      {/* Título principal de la página */}
      <h1 className="text-success mb-4">Pago</h1>

      {/* Disposición de dos columnas: formulario (izquierda) y resumen (derecha) */}
      <Row className="g-4">

        {/* Columna izquierda: Formulario de entrega */}
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body>

              {/* Título del formulario */}
              <h5>Datos de entrega</h5>

              {/* Formulario con campos requeridos */}
              <Form>
                {/* Campo: Nombre */}
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control required />
                </Form.Group>

                {/* Campo: Dirección */}
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control required />
                </Form.Group>

                {/* Campo: Comuna */}
                <Form.Group className="mb-3">
                  <Form.Label>Comuna</Form.Label>
                  <Form.Control required />
                </Form.Group>

                {/* Campo: Teléfono */}
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control required />
                </Form.Group>

                {/* Botón de confirmación de pedido */}
                {/* as={Link}: lo convierte en enlace React Router */}
                {/* to="/confirmacion/HH-0001": ruta de ejemplo de confirmación */}
                <Button
                  variant="success"
                  as={Link}
                  to="/confirmacion/HH-0001"
                >
                  Confirmar pedido
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Columna derecha: Resumen del pedido */}
        <Col md={5}>
          <Card className="shadow-sm">
            <Card.Body>
              
              {/* Título del resumen */}
              <h5>Resumen</h5>

              {/* Lista de productos en el carrito */}
              <ul className="mb-3">
                {items.map((it) => (
                  <li key={it.codigo}>
                    {/* Muestra nombre, cantidad y subtotal formateado */}
                    {it.nombre} x {it.cantidad} —{" "}
                    {formatoCLP(it.precio_por_kg * it.cantidad)}
                  </li>
                ))}
              </ul>

              {/* Total general del pedido */}
              <h4>Total: {formatoCLP(total)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
