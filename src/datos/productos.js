// src/datos/productos.js
// -------------------------------------------------------
// Este archivo define funciones y datos relacionados con
// los productos destacados del catálogo. Incluye:
// 1. Un formateador de moneda CLP.
// 2. Un listado de productos con sus propiedades.
// -------------------------------------------------------


// -------------------------------------------------------
// Formateador de moneda CLP (exportado)
// -------------------------------------------------------

// Se exporta una constante llamada "formatoCLP", que es una función flecha.
// Esta función recibe un número 'n' y lo devuelve formateado como moneda chilena (CLP).
export const formatoCLP = (n) =>
  // Se crea un nuevo formateador internacional usando Intl.NumberFormat
  // Configurado para el idioma español de Chile ("es-CL")
  new Intl.NumberFormat("es-CL", {
    style: "currency",            // Estilo de formato: moneda
    currency: "CLP",              // Tipo de moneda: peso chileno (CLP)
    maximumFractionDigits: 0,     // Sin decimales (solo enteros)
  }).format(n);                   // Se aplica el formato al número recibido


// -------------------------------------------------------
// Catálogo de ejemplo usando imágenes locales desde /public
// -------------------------------------------------------

// Se exporta una constante llamada "productosDestacados"
// que contiene un arreglo de objetos. Cada objeto representa un producto del catálogo.
export const productosDestacados = [
  {
    // Código único del producto (identificador interno)
    codigo: "FR001",

    // Nombre descriptivo del producto
    nombre: "Manzanas Fuji",

    // Precio por kilogramo expresado en pesos chilenos (sin formato)
    precio_por_kg: 1200,

    // Cantidad disponible en stock (en kg o unidades)
    stock: 150,

    // Ruta de la imagen del producto.
    // process.env.PUBLIC_URL apunta al directorio 'public' de React,
    // donde se guardan los archivos estáticos.
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

// -------------------------------------------------------
// FIN DEL ARCHIVO
// -------------------------------------------------------
