// Importa React para definir componentes funcionales
import React from "react";

// Importa hooks y componentes de React Router
// - useParams: permite acceder a parámetros dinámicos en la URL (por ejemplo: /pedido/:pedidoId)
// - Link: permite crear enlaces internos sin recargar la página
import { useParams, Link } from "react-router-dom";

// Importa componentes de React-Bootstrap
// - Container: centra y limita el ancho del contenido
// - Button: genera botones estilizados con variantes de color
import { Container, Button } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: ConfirmacionPedido
// -------------------------------------------------------
// Este componente muestra un mensaje de confirmación después de completar un pedido.
// Toma el ID del pedido desde la URL y lo presenta al usuario junto a un enlace para seguir comprando.
export default function ConfirmacionPedido() {

  // Obtiene el parámetro dinámico 'pedidoId' desde la URL.
  // useParams() devuelve un objeto con todos los parámetros definidos en la ruta.
  // Ejemplo de ruta: "/pedido/:pedidoId" → pedidoId contendrá el número del pedido.
  const { pedidoId } = useParams();

  // Retorna la estructura visual del componente
  return (
    // Contenedor con margen vertical (my-5) y texto centrado
    <Container className="my-5 text-center">
      
      {/* Título principal en color verde con margen inferior */}
      <h1 className="text-success mb-3">¡Pedido confirmado!</h1>

      {/* Muestra el número del pedido obtenido desde la URL */}
      {/* text-muted: texto gris claro / strong: destaca el número del pedido */}
      <p className="text-muted">
        Número de pedido: <strong>{pedidoId}</strong>
      </p>

      {/* Botón para redirigir al usuario nuevamente al catálogo de productos */}
      {/* as={Link}: convierte el botón en un enlace React Router */}
      {/* variant="success": estilo verde / to="/productos": define la ruta destino */}
      <Button as={Link} to="/productos" variant="success">
        Seguir comprando
      </Button>
    </Container>
  );
}
