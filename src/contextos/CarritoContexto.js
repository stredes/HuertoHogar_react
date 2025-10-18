// Importa React y los hooks necesarios para crear y gestionar el contexto
import React, { createContext, useContext, useMemo, useState } from "react";

// -------------------------------------------------------
// Creación del contexto global del carrito
// -------------------------------------------------------
// Se crea un contexto llamado CarritoContexto con valor inicial null.
// Este contexto servirá para compartir el estado del carrito entre componentes
// sin necesidad de pasar props manualmente.
const CarritoContexto = createContext(null);


// -------------------------------------------------------
// Hook personalizado: useCarrito
// -------------------------------------------------------
// Permite acceder fácilmente al contexto del carrito desde cualquier componente.
// Si se intenta usar fuera del proveedor, lanza un error para evitar mal uso.
export function useCarrito() {
  const ctx = useContext(CarritoContexto); // Obtiene el valor actual del contexto
  if (!ctx)
    throw new Error("useCarrito debe usarse dentro de <CarritoProveedor>");
  return ctx; // Retorna el objeto de contexto con funciones y datos del carrito
}


// -------------------------------------------------------
// Componente proveedor del contexto: CarritoProveedor
// -------------------------------------------------------
// Este componente envuelve partes de la aplicación que necesitan acceder al carrito.
// Gestiona el estado, operaciones y valores derivados.
export function CarritoProveedor({ children }) {

  // Estado local que contiene los productos en el carrito.
  // Cada elemento es un objeto con: {codigo, nombre, precio_por_kg, cantidad}
  const [items, setItems] = useState([]);

  // -------------------------------------------------------
  // Función: añadirAlCarrito
  // -------------------------------------------------------
  // Agrega un producto al carrito o incrementa su cantidad si ya existe.
  const añadirAlCarrito = (producto, cantidad = 1) => {
    setItems((prev) => {
      // Busca si el producto ya está en el carrito (por código)
      const idx = prev.findIndex((i) => i.codigo === producto.codigo);

      if (idx >= 0) {
        // Si ya existe, crea una copia del arreglo y actualiza la cantidad
        const copia = [...prev];
        copia[idx] = {
          ...copia[idx],
          cantidad: copia[idx].cantidad + cantidad,
        };
        return copia;
      }

      // Si el producto no está, lo agrega como nuevo al carrito
      return [
        ...prev,
        {
          codigo: producto.codigo,
          nombre: producto.nombre,
          precio_por_kg: producto.precio_por_kg,
          cantidad,
        },
      ];
    });
  };

  // -------------------------------------------------------
  // Función: quitarDelCarrito
  // -------------------------------------------------------
  // Elimina completamente un producto del carrito usando su código.
  const quitarDelCarrito = (codigo) => {
    setItems((prev) => prev.filter((i) => i.codigo !== codigo));
  };

  // -------------------------------------------------------
  // Función: limpiarCarrito
  // -------------------------------------------------------
  // Vacía completamente el carrito.
  const limpiarCarrito = () => setItems([]);

  // -------------------------------------------------------
  // Valor derivado: total
  // -------------------------------------------------------
  // Calcula el valor total del carrito (precio * cantidad)
  // useMemo evita recalcularlo innecesariamente si los items no cambian.
  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.precio_por_kg * it.cantidad, 0),
    [items]
  );

  // -------------------------------------------------------
  // Valor derivado: cantidadTotal
  // -------------------------------------------------------
  // Calcula el número total de unidades en el carrito (suma de cantidades)
  const cantidadTotal = useMemo(
    () => items.reduce((acc, it) => acc + it.cantidad, 0),
    [items]
  );

  // -------------------------------------------------------
  // Objeto "value" compartido en el contexto
  // -------------------------------------------------------
  // Contiene todos los datos y funciones que podrán usar los componentes hijos
  const value = {
    items,              // Lista de productos en el carrito
    añadirAlCarrito,    // Función para agregar productos
    quitarDelCarrito,   // Función para eliminar productos
    limpiarCarrito,     // Función para vaciar el carrito
    total,              // Monto total del carrito
    cantidadTotal,      // Cantidad total de ítems
  };

  // -------------------------------------------------------
  // Retorno del proveedor de contexto
  // -------------------------------------------------------
  // Envuelve a los componentes hijos y les provee acceso al valor del carrito.
  return (
    <CarritoContexto.Provider value={value}>
      {children}
    </CarritoContexto.Provider>
  );
}
