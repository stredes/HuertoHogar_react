// Importa React para crear componentes funcionales
import React from "react";

// Importa componentes de interfaz desde React-Bootstrap
// - Card: estructura visual de tarjeta
// - Button: botones estilizados con variantes de color
import { Card, Button } from "react-bootstrap";

// Importa Link desde React Router para navegación interna sin recargar la página
import { Link } from "react-router-dom";

// Importa el formateador de moneda CLP (peso chileno) desde el módulo de datos
import { formatoCLP } from "../datos/productos";

// Importa el hook del contexto del carrito de compras
// Este permite acceder a las funciones y estado del carrito global
import { useCarrito } from "../contextos/CarritoContexto";


// -------------------------------------------------------
// Componente principal: TarjetaProducto
// -------------------------------------------------------
// Renderiza la información de un producto en una tarjeta visual.
// Muestra imagen, nombre, precio, stock y botones de acción.
export default function TarjetaProducto({ producto }) {

  // Obtiene la función 'añadirAlCarrito' desde el contexto global del carrito
  // Permite agregar productos al carrito con la cantidad deseada
  const { añadirAlCarrito } = useCarrito();

  // Retorna la estructura visual de la tarjeta del producto
  return (
    // Componente Card de Bootstrap
    // h-100: ocupa toda la altura disponible
    // shadow-sm: agrega sombra ligera
    // border-0: sin bordes visibles
    <Card className="h-100 shadow-sm border-0">

      {/* Renderiza la imagen del producto solo si existe */}
      {producto.imagen && (
        <Card.Img
          variant="top"                   // Posiciona la imagen en la parte superior de la tarjeta
          src={producto.imagen}           // Ruta de la imagen
          alt={producto.nombre}           // Texto alternativo (accesibilidad)
          style={{ objectFit: "cover", height: 220 }}  // Ajusta la imagen sin deformarla
          loading="lazy"                  // Optimiza la carga (lazy loading)
        />
      )}

      {/* Cuerpo principal de la tarjeta */}
      <Card.Body>
        {/* Código del producto (ejemplo: FR001), mostrado como una insignia */}
        <span className="badge text-bg-warning">{producto.codigo}</span>

        {/* Título con el nombre del producto */}
        <Card.Title className="mt-2">{producto.nombre}</Card.Title>

        {/* Precio por kilogramo, formateado a moneda chilena */}
        <Card.Text className="mb-1 text-muted">
          {formatoCLP(producto.precio_por_kg)} / kg
        </Card.Text>

        {/* Muestra el stock disponible en texto pequeño */}
        <small className="text-muted">Stock: {producto.stock}</small>
      </Card.Body>

      {/* Pie de la tarjeta con botones de acción */}
      {/* bg-white: fondo blanco / border-0: sin borde inferior / pb-4: padding inferior */}
      {/* d-flex gap-2: usa flexbox con separación entre botones */}
      <Card.Footer className="bg-white border-0 pb-4 d-flex gap-2">
        
        {/* Botón que redirige a la página de detalle del producto */}
        {/* 'to' construye la ruta dinámica usando el código del producto */}
        <Button
          as={Link}
          to={`/productos/${producto.codigo}`}
          variant="success"
          className="flex-fill"    // Hace que ambos botones ocupen el mismo ancho
        >
          Ver
        </Button>

        {/* Botón que añade el producto al carrito con cantidad 1 */}
        {/* Usa una función flecha anónima para pasar los parámetros */}
        <Button
          onClick={() => añadirAlCarrito(producto, 1)}
          variant="success"
          className="flex-fill"
        >
          Añadir
        </Button>
      </Card.Footer>
    </Card>
  );
}
