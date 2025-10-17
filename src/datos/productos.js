// src/datos/productos.js

// Formateador de moneda CLP (exportado)
export const formatoCLP = (n) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(n);

// Catálogo de ejemplo usando imágenes locales desde /public
export const productosDestacados = [
  {
    codigo: "FR001",
    nombre: "Manzanas Fuji",
    precio_por_kg: 1200,
    stock: 150,
    imagen: process.env.PUBLIC_URL + "/manzana.jpeg",
  },
  {
    codigo: "FR002",
    nombre: "Naranjas Valencia",
    precio_por_kg: 1000,
    stock: 200,
    imagen: process.env.PUBLIC_URL + "/naranja.jpeg",
  },
  {
    codigo: "FR003",
    nombre: "Plátanos Cavendish",
    precio_por_kg: 800,
    stock: 250,
    imagen: process.env.PUBLIC_URL + "/platanos-cavendish.jpg",
  },
  {
    codigo: "VG004",
    nombre: "Zanahorias Orgánicas",
    precio_por_kg: 900,
    stock: 120,
    imagen: process.env.PUBLIC_URL + "/zanahoria.jpg",
  },
  {
    codigo: "VG005",
    nombre: "Espinaca Fresca",
    precio_por_kg: 1100,
    stock: 90,
    imagen: process.env.PUBLIC_URL + "/espinacas.jpg",
  },
];
