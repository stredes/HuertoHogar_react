import React, { createContext, useContext, useMemo, useState } from "react";

const CarritoContexto = createContext(null);

export function useCarrito() {
  const ctx = useContext(CarritoContexto);
  if (!ctx) throw new Error("useCarrito debe usarse dentro de <CarritoProveedor>");
  return ctx;
}

export function CarritoProveedor({ children }) {
  const [items, setItems] = useState([]); // [{codigo, nombre, precio_por_kg, cantidad}]

  const añadirAlCarrito = (producto, cantidad = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.codigo === producto.codigo);
      if (idx >= 0) {
        const copia = [...prev];
        copia[idx] = { ...copia[idx], cantidad: copia[idx].cantidad + cantidad };
        return copia;
      }
      return [...prev, { codigo: producto.codigo, nombre: producto.nombre, precio_por_kg: producto.precio_por_kg, cantidad }];
    });
  };

  const quitarDelCarrito = (codigo) => {
    setItems((prev) => prev.filter((i) => i.codigo !== codigo));
  };

  const limpiarCarrito = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.precio_por_kg * it.cantidad, 0),
    [items]
  );

  const cantidadTotal = useMemo(
    () => items.reduce((acc, it) => acc + it.cantidad, 0),
    [items]
  );

  const value = { items, añadirAlCarrito, quitarDelCarrito, limpiarCarrito, total, cantidadTotal };
  return <CarritoContexto.Provider value={value}>{children}</CarritoContexto.Provider>;
}
