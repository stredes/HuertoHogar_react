// Importa React para definir componentes funcionales
import React from "react";

// Importa el componente Container desde React-Bootstrap
// Sirve para centrar y contener el contenido dentro de la página con márgenes automáticos
import { Container } from "react-bootstrap";

// Importa Link desde React Router para manejar enlaces internos sin recargar la página
import { Link } from "react-router-dom";


// -------------------------------------------------------
// Componente principal: Blog
// -------------------------------------------------------
// Este componente representa la página del blog del sitio.
// Actualmente muestra un listado de publicaciones estáticas,
// pero está preparado para integrarse con una API en el futuro.
export default function Blog() {

  // TODO: reemplazar por listado real desde API
  // Arreglo temporal con publicaciones de ejemplo.
  // Cada objeto contiene:
  // - slug: identificador único de la publicación (usado en la URL)
  // - titulo: texto visible del enlace
  const posts = [
    { slug: "recetas-de-temporada", titulo: "Recetas de temporada" },
    { slug: "cosecha-local", titulo: "Cosecha local: ¿por qué importa?" }
  ];

  // Retorna la estructura visual del componente
  return (
    // Contenedor principal con margen vertical grande (my-5)
    <Container className="my-5">
      
      {/* Título principal de la página del blog */}
      {/* text-success: color verde / mb-4: margen inferior */}
      <h1 className="text-success mb-4">Blog</h1>

      {/* Lista desordenada que contiene las publicaciones */}
      <ul>
        {/* Itera sobre el arreglo de publicaciones usando map() */}
        {posts.map((p) => (
          // Cada elemento <li> representa una publicación individual
          // key={p.slug}: clave única requerida por React al renderizar listas
          <li key={p.slug}>
            {/* Enlace a la publicación específica */}
            {/* Usa React Router Link para navegación interna sin recargar la página */}
            {/* Construye la ruta dinámica usando el slug del post */}
            <Link to={`/blog/${p.slug}`}>{p.titulo}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
