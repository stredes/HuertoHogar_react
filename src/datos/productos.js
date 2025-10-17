// Catálogo de ejemplo con claves en español.
// En producción, reemplaza por fetch hacia tu API.
export const productosDestacados = [
  {
    codigo: "FR001",
    nombre: "Manzanas Fuji",
    precio_por_kg: 1200,
    stock: 150,
    imagen: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop"
  },
  {
    codigo: "FR002",
    nombre: "Naranjas Valencia",
    precio_por_kg: 1000,
    stock: 200,
    imagen: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop"
  },
  {
    codigo: "FR003",
    nombre: "Plátanos Cavendish",
    precio_por_kg: 800,
    stock: 250,
    imagen: "https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=1200&auto=format&fit=crop"
  },
  {
    codigo: "VG004",
    nombre: "Zanahorias Orgánicas",
    precio_por_kg: 900,
    stock: 120,
    imagen: "https://images.unsplash.com/photo-1546549039-49c1386fd6cb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    codigo: "VG005",
    nombre: "Espinaca Fresca",
    precio_por_kg: 1100,
    stock: 90,
    imagen: "https://images.unsplash.com/photo-1542835455-0465b31891b3?q=80&w=1200&auto=format&fit=crop"
  }
];

// Utilidad para formatear CLP
export const formatoCLP = (n) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
