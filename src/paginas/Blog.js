import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Blog() {
  // TODO: reemplazar por listado real desde API
  const posts = [
    { slug: "recetas-de-temporada", titulo: "Recetas de temporada" },
    { slug: "cosecha-local", titulo: "Cosecha local: ¿por qué importa?" }
  ];
  return (
    <Container className="my-5">
      <h1 className="text-success mb-4">Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`}>{p.titulo}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
