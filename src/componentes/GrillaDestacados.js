// Importa React, necesario para definir componentes funcionales
import React from "react";

// Importa componentes del sistema de cuadrícula de React-Bootstrap:
// - Container: para agrupar y centrar el contenido
// - Row: define una fila dentro del sistema de grillas (grid)
// - Col: define una columna dentro de la fila
import { Container, Row, Col } from "react-bootstrap";

// Importa el componente TarjetaProducto, que renderiza la vista individual de un producto
import TarjetaProducto from "./TarjetaProducto";

// Importa el arreglo de productos destacados desde los datos
import { productosDestacados } from "../datos/productos";


// -------------------------------------------------------
// Componente principal: GrillaDestacados
// -------------------------------------------------------
// Este componente muestra una cuadrícula (grilla) con tarjetas de productos destacados
// Cada tarjeta representa un producto del catálogo usando el componente TarjetaProducto
export default function GrillaDestacados() {
  // Retorna la estructura visual del componente
  return (
    // Contenedor principal con margen vertical (my-5)
    // id="productos": permite anclar o vincular esta sección mediante enlaces
    <Container className="my-5" id="productos">
      
      {/* Título de la sección en color verde (text-success) y negrita */}
      <h2 className="text-success fw-bold mb-4">
        Productos destacados
      </h2>

      {/* Fila de la grilla Bootstrap con separación entre columnas (g-4) */}
      <Row className="g-4">

        {/* 
          Itera sobre el arreglo productosDestacados usando map().
          Cada elemento 'p' representa un producto individual.
        */}
        {productosDestacados.map((p) => (
          
          // Cada producto se renderiza dentro de una columna (Col)
          // key={p.codigo}: asigna un identificador único a cada elemento (clave obligatoria en listas React)
          // xs={12}: en pantallas pequeñas ocupa todo el ancho
          // md={6}: en pantallas medianas ocupa la mitad (2 columnas por fila)
          // lg={4}: en pantallas grandes ocupa 1/3 (3 columnas por fila)
          <Col key={p.codigo} xs={12} md={6} lg={4}>

            {/* Renderiza el componente TarjetaProducto pasando el producto como prop */}
            <TarjetaProducto producto={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
