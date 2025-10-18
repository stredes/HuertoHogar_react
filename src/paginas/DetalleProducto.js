// Importa React para crear componentes funcionales
import React from "react";

// Importa el hook useParams desde React Router
// Permite obtener los parámetros dinámicos definidos en la URL (en este caso el ID del producto)
import { useParams } from "react-router-dom";

// Importa componentes de React-Bootstrap
// - Container, Row, Col: sistema de grillas para disposición responsiva
// - Button: botones estilizados
// - Badge: etiqueta visual para destacar información (como el código del producto)
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

// Importa el catálogo de productos y el formateador de moneda CLP
import { productosDestacados, formatoCLP } from "../datos/productos";

// Importa el hook del contexto del carrito para poder agregar productos al carrito global
import { useCarrito } from "../contextos/CarritoContexto";


// -------------------------------------------------------
// Componente principal: DetalleProducto
// -------------------------------------------------------
// Muestra la información detallada de un producto seleccionado.
// Se obtiene su código desde la URL y se busca dentro del catálogo local.
export default function DetalleProducto() {

  // Obtiene el parámetro "id" desde la URL (definido como :id en la ruta)
  // Este "id" corresponde al "codigo" del producto (por ejemplo: FR001)
  const { id } = useParams();

  // Obtiene la función 'añadirAlCarrito' del contexto global del carrito
  // Permite añadir el producto seleccionado al carrito
  const { añadirAlCarrito } = useCarrito();

  // Busca el producto dentro del arreglo productosDestacados
  // Comparando el código del producto con el parámetro recibido en la URL
  const producto = productosDestacados.find((p) => p.codigo === id);

  // Si el producto no existe (id inválido), muestra un mensaje de error
  if (!producto) {
    return (
      <Container className="my-5">
        <h1 className="mb-3">Producto no encontrado</h1>
        <p className="text-muted">Revisa el código del producto.</p>
      </Container>
    );
  }

  // Si el producto existe, renderiza su información completa
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">

      {/* Fila principal con separación entre columnas (g-4) */}
      <Row className="g-4">

        {/* Columna izquierda: muestra la imagen del producto */}
        <Col md={6}>
          {/* Renderiza la imagen solo si existe la propiedad "imagen" */}
          {producto.imagen && (
            <img
              src={producto.imagen}                 // Ruta de la imagen
              alt={producto.nombre}                 // Texto alternativo (accesibilidad)
              className="img-fluid rounded shadow-sm" // Imagen responsiva, con bordes redondeados y sombra
            />
          )}
        </Col>

        {/* Columna derecha: muestra la información del producto */}
        <Col md={6}>
          {/* Encabezado con el nombre y el código del producto */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <h1 className="mb-0">{producto.nombre}</h1>
            <Badge bg="warning" text="dark">{producto.codigo}</Badge>
          </div>

          {/* Precio por kilogramo (formateado en CLP) */}
          <p className="text-muted fs-5">
            {formatoCLP(producto.precio_por_kg)} / kg
          </p>

          {/* Stock disponible */}
          <p className="text-muted">
            Stock disponible: {producto.stock}
          </p>

          {/* Botones de acción */}
          <div className="d-flex gap-2">
            {/* Botón que añade el producto al carrito */}
            <Button
              onClick={() => añadirAlCarrito(producto, 1)}
              variant="success"
            >
              Añadir al carrito
            </Button>

            {/* Botón de compra directa (sin implementar todavía) */}
            <Button variant="outline-success">
              Comprar ahora
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
