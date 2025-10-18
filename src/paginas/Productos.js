// Importa React y los hooks useMemo/useState para estado y cálculos memorizados
import React, { useMemo, useState } from "react";

// Importa componentes de UI de React-Bootstrap:
// - Container, Row, Col: layout responsivo
// - Form, InputGroup: controles de formulario y grupos de inputs
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

// Importa la tarjeta de producto reutilizable
import TarjetaProducto from "../componentes/TarjetaProducto";

// Importa el catálogo y el formateador de moneda CLP
import { productosDestacados, formatoCLP } from "../datos/productos";


// -------------------------------------------------------
// Componente principal: Productos
// -------------------------------------------------------
// Renderiza la página de catálogo con filtros (búsqueda, precio máximo y stock).
export default function Productos() {

  // Estado controlado para el texto de búsqueda (por nombre o código)
  const [busqueda, setBusqueda] = useState("");

  // Estado controlado para el filtro de precio máximo (string para reflejar el input)
  const [precioMax, setPrecioMax] = useState("");

  // Estado booleano para mostrar solo productos con stock disponible
  const [soloStock, setSoloStock] = useState(false);

  // Calcula la lista filtrada de productos. Se memoriza con useMemo para evitar
  // recomputar en cada render a menos que cambien las dependencias (busqueda, precioMax, soloStock).
  const productos = useMemo(() => {
    return productosDestacados.filter((p) => {
      // Coincidencia por texto: compara en minúsculas contra nombre y código
      const coincideTexto =
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.codigo.toLowerCase().includes(busqueda.toLowerCase());

      // Filtro de precio máximo: si precioMax está definido, compara como número
      const okPrecio = precioMax ? p.precio_por_kg <= Number(precioMax) : true;

      // Filtro de stock: si está activo, requiere stock > 0
      const okStock = soloStock ? p.stock > 0 : true;

      // El producto se incluye solo si cumple los tres criterios
      return coincideTexto && okPrecio && okStock;
    });
  }, [busqueda, precioMax, soloStock]); // Dependencias: recalcula al cambiar cualquiera

  // Calcula el precio más alto del catálogo para usarlo como placeholder del filtro
  const maxCatalogo = Math.max(
    ...productosDestacados.map((p) => p.precio_por_kg)
  );

  // Renderizado principal del componente
  return (
    // Contenedor con margen vertical
    <Container className="my-5">

      {/* Título de la página de productos */}
      <h1 className="text-success mb-4">Productos</h1>

      {/* Sección de filtros */}
      <Row className="g-3 mb-4">

        {/* Filtro de texto (nombre o código) con InputGroup para etiqueta visual */}
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>Buscar</InputGroup.Text>
            <Form.Control
              placeholder="Nombre o código"           // Texto de ayuda
              value={busqueda}                         // Valor controlado
              onChange={(e) => setBusqueda(e.target.value)} // Actualiza estado
            />
          </InputGroup>
        </Col>

        {/* Filtro de precio máximo: numérico con placeholder formateado */}
        <Col md={3}>
          <InputGroup>
            <InputGroup.Text>Precio máx</InputGroup.Text>
            <Form.Control
              type="number"                            // Solo números
              min={0}                                  // No permite negativos
              placeholder={formatoCLP(maxCatalogo)}    // Sugerencia basada en el máximo del catálogo
              value={precioMax}                        // Valor controlado (string)
              onChange={(e) => setPrecioMax(e.target.value)} // Actualiza estado
            />
          </InputGroup>
        </Col>

        {/* Switch para mostrar solo productos con stock */}
        <Col md={3} className="d-flex align-items-center">
          <Form.Check
            type="switch"              // Renderiza como interruptor
            id="solo-stock"           // Id único para accesibilidad
            label="Solo con stock"    // Etiqueta visible
            checked={soloStock}       // Valor controlado
            onChange={(e) => setSoloStock(e.target.checked)} // Actualiza estado
          />
        </Col>
      </Row>

      {/* Grilla de resultados */}
      <Row className="g-4">
        {/* Renderiza una tarjeta por producto filtrado, con layout responsivo */}
        {productos.map((p) => (
          <Col key={p.codigo} xs={12} md={6} lg={4}>
            <TarjetaProducto producto={p} />
          </Col>
        ))}

        {/* Mensaje de estado cuando no hay coincidencias con los filtros */}
        {productos.length === 0 && (
          <Col xs={12}>
            <p className="text-muted">
              No hay productos que coincidan con los filtros.
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
}
