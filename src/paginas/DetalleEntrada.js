// Importa React para crear componentes funcionales
import React from "react";

// Importa useParams desde React Router
// Este hook permite acceder a los parámetros dinámicos definidos en la URL
// En este caso, obtendrá el slug de la entrada del blog (por ejemplo: /blog/cosecha-local)
import { useParams } from "react-router-dom";

// Importa Container desde React-Bootstrap
// Se utiliza para centrar y limitar el ancho del contenido principal
import { Container } from "react-bootstrap";


// -------------------------------------------------------
// Componente principal: DetalleEntrada
// -------------------------------------------------------
// Este componente muestra el contenido individual de una entrada del blog.
// Usa el parámetro dinámico 'slug' para identificar la publicación seleccionada.
export default function DetalleEntrada() {

  // Obtiene el parámetro 'slug' desde la URL
  // Ejemplo: /blog/cosecha-local → slug = "cosecha-local"
  const { slug } = useParams();

  // Retorna la estructura visual del componente
  return (
    // Contenedor principal con margen vertical (my-5)
    <Container className="my-5">

      {/* Título principal de la entrada */}
      {/* text-success: aplica color verde (consistente con la identidad visual del sitio) */}
      <h1 className="text-success">Entrada: {slug}</h1>

      {/* Texto temporal mientras se implementa el contenido real */}
      <p className="text-muted">Contenido del blog próximamente…</p>
    </Container>
  );
}
