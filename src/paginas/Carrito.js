// Importa React para definir componentes funcionales
import React from "react";

// Importa componentes de interfaz desde React-Bootstrap:
// - Container: para centrar y limitar el contenido
// - Table: tabla con formato y estilos integrados
// - Button: botones estilizados con variantes de color
import { Container, Table, Button } from "react-bootstrap";

// Importa la función formatoCLP para formatear los precios a moneda chilena
import { formatoCLP } from "../datos/productos";

// Importa el hook useCarrito desde el contexto del carrito global
// Permite acceder a los productos agregados y funciones de manipulación
import { useCarrito } from "../contextos/CarritoContexto";

// Importa Link desde React Router para navegación interna sin recarga
import { Link } from "react-router-dom";


// -------------------------------------------------------
// Componente principal: Carrito
// -------------------------------------------------------
// Muestra el contenido del carrito de compras, permitiendo ver,
// eliminar o vaciar productos, y avanzar al proceso de pago.
export default function Carrito() {

  // Desestructura propiedades y funciones del contexto global del carrito:
  // items → lista de productos en el carrito
  // quitarDelCarrito → función para eliminar un producto específico
  // limpiarCarrito → función para vaciar todo el carrito
  // total → valor total calculado del carrito
  const { items, quitarDelCarrito, limpiarCarrito, total } = useCarrito();

  // Retorna la estructura visual del componente
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">
      
      {/* Título principal del carrito */}
      <h1 className="text-success mb-4">Carrito</h1>

      {/* Renderizado condicional:
          Si el carrito está vacío, muestra un mensaje informativo.
          Si tiene productos, muestra la tabla con el detalle. */}
      {items.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Tabla con los productos del carrito */}
          {/* bordered: bordes visibles / hover: efecto al pasar el cursor / responsive: adaptable a pantallas pequeñas */}
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Precio/kg</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th> {/* Columna para botón "Quitar" */}
              </tr>
            </thead>

            <tbody>
              {/* Recorre la lista de productos en el carrito y los muestra en filas */}
              {items.map((it) => (
                <tr key={it.codigo}>
                  {/* Código del producto */}
                  <td>{it.codigo}</td>

                  {/* Nombre del producto */}
                  <td>{it.nombre}</td>

                  {/* Precio unitario formateado */}
                  <td>{formatoCLP(it.precio_por_kg)}</td>

                  {/* Cantidad seleccionada */}
                  <td>{it.cantidad}</td>

                  {/* Subtotal = precio * cantidad, también formateado */}
                  <td>{formatoCLP(it.precio_por_kg * it.cantidad)}</td>

                  {/* Botón para eliminar este producto del carrito */}
                  <td>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => quitarDelCarrito(it.codigo)}
                    >
                      Quitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Sección inferior con acciones generales */}
          <div className="d-flex justify-content-between align-items-center">
            {/* Botón para vaciar completamente el carrito */}
            <Button variant="outline-secondary" onClick={limpiarCarrito}>
              Vaciar carrito
            </Button>

            {/* Muestra el total general del carrito */}
            <h4>Total: {formatoCLP(total)}</h4>
          </div>

          {/* Botón para avanzar al proceso de pago */}
          <div className="mt-3 d-flex justify-content-end">
            <Button as={Link} to="/pago" variant="success">
              Ir a pagar
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
